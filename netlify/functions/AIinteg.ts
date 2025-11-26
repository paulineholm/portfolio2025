import "./instrumentation";
import type { Handler } from "@netlify/functions";
import { InferenceClient } from "@huggingface/inference";
import axios from "axios";
import * as cheerio from "cheerio";
import {
  observe,
  updateActiveTrace,
  updateActiveObservation,
} from "@langfuse/tracing";

// Import context data
import { PUBLIC_RESOURCES } from "../../src/assets/data/context/publicResources";
import { contactContext } from "../../src/assets/data/context/contact";
import { masterthesisContext } from "../../src/assets/data/context/masterthesis";
import { generalContext } from "../../src/assets/data/context/general";
import { professionalContext } from "../../src/assets/data/context/professional";
import { personalityContext } from "../../src/assets/data/context/personality";
import { cv } from "../../src/assets/data/context/cv";

const buildStaticContext = () => {
  return `
    Master Thesis Context: ${masterthesisContext}
    General Context: ${generalContext}
    Professional Context: ${professionalContext}
    Contact Context: ${contactContext}
    Personality Context: ${personalityContext}
    CV Context: Name: ${cv.name}, LinkedIn: ${cv.linkedin}, Summary: ${cv.summary.description}, Email: ${cv.email}, Role: ${cv.summary.role}
  `.trim();
};

// Simple cache
const cache: Record<string, { content: string; timestamp: number }> = {};
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

// Fetch content from URL
async function fetchUrl(url: string): Promise<string | null> {
  // Check cache
  const cached = cache[url];
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log(`Cache hit: ${url}`);
    return cached.content;
  }

  try {
    console.log(`Fetching: ${url}`);
    const { data } = await axios.get(url, { timeout: 5000 });
    const $ = cheerio.load(data);

    $("script, style, nav, footer").remove();

    const content = $("h1, h2, h3, p, li")
      .map((_, el) => $(el).text())
      .get()
      .join(" ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 1500);

    cache[url] = { content, timestamp: Date.now() };
    return content;
  } catch (err) {
    console.warn(`Failed to fetch ${url}`);
    return null;
  }
}

// Build context with dynamic fetching
async function buildContext(question: string) {
  const staticContext = buildStaticContext();

  // Find relevant resources
  const questionLower = question.toLowerCase();
  const relevantResources = PUBLIC_RESOURCES.filter((resource) =>
    resource.keywords.some((keyword) => questionLower.includes(keyword))
  );

  if (relevantResources.length === 0) {
    return staticContext;
  }

  console.log(`Found ${relevantResources.length} relevant resources`);

  // Fetch content from relevant resources
  const fetchPromises = relevantResources.map((r) => fetchUrl(r.url));
  const contents = await Promise.all(fetchPromises);

  const dynamicContext = contents
    .filter((content) => content !== null)
    .map((content, i) => `[${relevantResources[i].name}]: ${content}`)
    .join("\n\n");

  return dynamicContext
    ? `${staticContext}\n\n=== LIVE INFO ===\n${dynamicContext}`
    : staticContext;
}

export const handler: Handler = observe(
  async (event) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    };

    if (event.httpMethod === "OPTIONS") {
      return { statusCode: 200, headers, body: "" };
    }

    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    try {
      const { question, conversationId, timezone, locale, feedback } =
        JSON.parse(event.body || "{}");

      // Handle regular question
      if (!feedback && question && question.trim().length > 0) {
        if (!process.env.HUGGINGFACE_API_KEY) {
          return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "API key not configured" }),
          };
        }

        // Langfuse: Update trace
        updateActiveTrace({
          name: "bubba-bot",
          sessionId: conversationId || "anonymous",
          input: question,
          metadata: {
            environment: "production",
            timezone: timezone || "unknown",
            locale: locale || "unknown",
          },
        });

        // Langfuse: Update observation input
        updateActiveObservation({
          input: question,
          metadata: {
            provider: "hugging-face",
            model: process.env.LLM_MAIN_MODEL,
          },
        });

        const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

        // Build context dynamically based on question
        const context = await buildContext(question);

        const response = await client.chatCompletion({
          model: process.env.LLM_MAIN_MODEL,
          messages: [
            {
              role: "system",
              content: `You are BubbaBot, a friendly portfolio assistant for Pauline. Answer questions using ONLY the context provided below. Always respond in first person, warmly, casually but clearly - keep responses to 2-3 sentences maximum. CONTEXT:${context}`,
            },
            {
              role: "user",
              content: question,
            },
          ],
          max_tokens: 150,
          temperature: 0.5,
          top_p: 0.9,
          repetition_penalty: 1.1,
        });

        const answer =
          response.choices?.[0]?.message?.content?.trim() ||
          "Sorry, I couldn't generate a response.";

        // Langfuse: Update observation output
        updateActiveObservation({
          output: answer,
        });

        // Langfuse: Update trace output
        updateActiveTrace({
          output: answer,
        });

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ answer }),
        };
      }

      // Handle feedback submission (happens after response is complete)
      if (feedback) {
        updateActiveTrace({
          name: "bubba-bot",
          sessionId: conversationId || "anonymous",
          input: {
            messageId: feedback.messageId,
            rating: feedback.rating,
          },
          output: {
            comment: feedback.comment || null,
          },
          metadata: {
            environment: "production",
            timestamp: new Date().toISOString(),
          },
        });

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true }),
        };
      }

      // Invalid request
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Question is required" }),
      };
    } catch (err: any) {
      console.error("HuggingFace API Error:", err);
      console.error("Error message:", err.message);
      console.error("Error details:", err.httpResponse?.body);

      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error:
            "Sorry, I'm having trouble processing your question right now. Please try again!",
        }),
      };
    }
  },
  { name: "bubba-bot-handler" }
);
