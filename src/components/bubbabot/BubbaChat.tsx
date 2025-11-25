import { useState, useRef, useEffect } from "react";
import BubbaInput from "./BubbaInput";
import BubbaMsg from "./BubbaMsg";

interface Message {
  id: string;
  content: string;
  sender: "bubba" | "user";
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: "1",
  content:
    "Hi! I'm BubbaBot 🤖 I'm here to help you learn about Pauline's work, projects, and experience. What would you like to know about her?",
  sender: "bubba",
  timestamp: new Date(),
};

const SUGGESTED_QUESTIONS = [
  "How is Pauline as a team player, how is she with her colleagues?",
  "Tell me about her professional experience and education",
  "What's her master thesis about? When did she graduate?",
  "Tell me something special about her",
];

const STORAGE_KEY = "bubbabot_chat_history";
const SUGGESTIONS_KEY = "bubbabot_suggestions_shown";

const BubbaChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [lastRequestTime, setLastRequestTime] = useState<number>(0);
  const [conversationId] = useState<string>(
    () => `conv-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
  );
  const RATE_LIMIT_MS = 5000;
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  // Load chat history from localStorage on mount
  useEffect(() => {
    const loadChatHistory = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        const suggestionsShown = localStorage.getItem(SUGGESTIONS_KEY);

        if (stored) {
          const parsed = JSON.parse(stored);
          const messagesWithDates = parsed.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          }));
          setMessages(messagesWithDates);
          setShowSuggestions(suggestionsShown !== "true");
        } else {
          setMessages([INITIAL_MESSAGE]);
        }
      } catch (error) {
        console.error("Failed to load chat history:", error);
        setMessages([INITIAL_MESSAGE]);
      } finally {
        setIsInitializing(false);
      }
    };

    const timer = setTimeout(loadChatHistory, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (messages.length > 0 && !isInitializing) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch (error) {
        console.error("Failed to save chat history:", error);
      }
    }
  }, [messages, isInitializing]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const addMessage = (content: string, sender: "bubba" | "user") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = async (message: string) => {
    // Check rate limit FIRST
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;

    if (timeSinceLastRequest < RATE_LIMIT_MS) {
      const waitTime = Math.ceil((RATE_LIMIT_MS - timeSinceLastRequest) / 1000);
      addMessage(
        `Please wait ${waitTime} seconds before asking again. ⏳`,
        "bubba"
      );
      return; // Exit early - don't add user message or set loading
    }

    // Now proceed with normal flow
    if (showSuggestions) {
      setShowSuggestions(false);
      localStorage.setItem(SUGGESTIONS_KEY, "true");
    }

    addMessage(message, "user");
    setIsLoading(true);
    setLastRequestTime(now);

    try {
      const response = await fetch("/.netlify/functions/AIinteg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: message,
          conversationId: conversationId,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          locale: navigator.language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          addMessage(
            data.error ||
              "You're asking too quickly! Please wait a few seconds and try again. ⏳",
            "bubba"
          );
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        addMessage(
          data.answer ||
            "Sorry, I couldn't process your question right now. Please try again!",
          "bubba"
        );
      }
    } catch (error) {
      console.error("Error calling AI function:", error);
      addMessage(
        "Oops! I'm having trouble connecting right now. Please try again in a moment! 🤖",
        "bubba"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const handleClearChat = () => {
    if (confirm("Are you sure you want to clear the chat history?")) {
      setMessages([INITIAL_MESSAGE]);
      setShowSuggestions(true);
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(SUGGESTIONS_KEY);
    }
  };

  return (
    <div className="flex flex-col h-[70vh] bg-white/40 backdrop-blur-sm rounded-lg shadow-lg border border-base-300">
      <div className="bg-primary text-primary-content p-4 rounded-t-lg flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg flex items-center gap-2">
            <span>🤖</span>
            BubbaChat
          </h3>
          <p className="text-sm opacity-90">
            Here to help you get to know Pauline better! ✨
          </p>
        </div>
        {messages.length > 1 && (
          <button
            onClick={handleClearChat}
            className="btn btn-ghost btn-sm text-primary-content hover:bg-primary-focus"
            title="Clear chat history"
          >
            🗑️
          </button>
        )}
      </div>

      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-50"
      >
        {isInitializing ? (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content text-lg">
                🤖
              </div>
            </div>
            <div className="chat-bubble chat-bubble-primary">
              <span className="loading loading-dots loading-sm"></span>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <BubbaMsg
                key={message.id}
                message={message.content}
                sender={message.sender}
                timeStamp={message.timestamp}
              />
            ))}

            {showSuggestions && !isLoading && (
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-sm text-gray-600 font-medium">Try asking:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {SUGGESTED_QUESTIONS.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(question)}
                      className="text-left px-4 py-2 bg-white hover:bg-primary hover:text-primary-content rounded-lg border border-primary/20 transition-all text-sm shadow-sm hover:shadow-md"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {isLoading && (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full bg-primary flex items-center justify-center text-primary-content text-lg">
                🤖
              </div>
            </div>
            <div className="chat-bubble chat-bubble-primary">
              <span className="loading loading-dots loading-sm"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-base-300 bg-base-100 rounded-b-lg">
        <BubbaInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default BubbaChat;
