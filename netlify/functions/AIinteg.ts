import "./instrumentation";
import type { Handler } from "@netlify/functions";
import { InferenceClient } from "@huggingface/inference";
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
import { fullTestimonials } from "../../src/assets/data/context/fullTestimonials";
import { cv } from "../../src/assets/data/context/cv";

const buildStaticContext = () => {
  const resourceLinks = PUBLIC_RESOURCES.map(
    (resource) => `${resource.name}: ${resource.url}`
  ).join("\n");

  return `
    Master Thesis Context: ${masterthesisContext}
    General Context: ${generalContext}
    Professional Context: ${professionalContext}
    Contact Context: ${contactContext}
    Personality Context: ${personalityContext}
    CV Context: Name: ${cv.name}, LinkedIn: ${cv.linkedin}, Summary: ${cv.summary.description}, Email: ${cv.email}, Role: ${cv.summary.role}
    Testimonials Context: ${fullTestimonials}

    === AVAILABLE LINKS ===
    ${resourceLinks}
  `.trim();
};

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

        // Build static context only - no dynamic fetching
        const context = buildStaticContext();

        try {
          const response = await client.chatCompletion({
            model: process.env.LLM_MAIN_MODEL,
            messages: [
              {
                role: "system",
                content: `You are BubbaBot, a friendly portfolio assistant for Pauline. Answer questions using ONLY the context provided below. Always respond in first person, warmly, casually but clearly - keep responses to 2-3 sentences maximum. When relevant, you can share links from the AVAILABLE LINKS section. CONTEXT: ${context}`,
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
        } catch (apiError: any) {
          // Handle 402 Payment Required error specifically
          if (apiError.httpResponse?.status === 402) {
            const creditsExhaustedMessage =
              "Oops! I've run out of my monthly chat credits. 😅 Please reach out to Pauline directly at pholm@tuta.io and she'll get back to you soon!";

            console.error("HuggingFace credits exhausted:", apiError.message);

            // Log to Langfuse
            updateActiveObservation({
              output: creditsExhaustedMessage,
              metadata: {
                error: "credits_exhausted",
                statusCode: 402,
              },
            });

            updateActiveTrace({
              output: creditsExhaustedMessage,
              metadata: {
                error: "credits_exhausted",
                statusCode: 402,
              },
            });

            return {
              statusCode: 200, // Return 200 so the frontend displays the message normally
              headers,
              body: JSON.stringify({ answer: creditsExhaustedMessage }),
            };
          }

          // Handle 500 server errors
          if (apiError.httpResponse?.status === 500) {
            console.error("HuggingFace server error:", apiError.message);

            const errorMessage =
              "I'm having trouble processing that question right now. Could you try rephrasing it or asking something more specific? 🤔";

            return {
              statusCode: 200,
              headers,
              body: JSON.stringify({ answer: errorMessage }),
            };
          }

          // Re-throw other API errors to be caught by outer catch
          throw apiError;
        }
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
