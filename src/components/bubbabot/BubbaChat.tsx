import { useState, useRef, useEffect } from "react";
import BubbaInput from "./BubbaInput";
import BubbaMsg from "./BubbaMsg";

interface Message {
  id: string;
  content: string;
  sender: "bubba" | "user";
  timestamp: Date;
}

const BubbaChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm BubbaBot 🤖 I'm here to help you learn about Pauline's work, projects, and experience. What would you like to know?",
      sender: "bubba",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate bot response (replace with your OpenAI integration)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Thanks for your message! I'm currently learning about Pauline's portfolio. This is where the OpenAI integration will provide intelligent responses about her work.",
        sender: "bubba",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[70vh] bg-white/40 backdrop-blur-sm rounded-lg shadow-lg border border-base-300">
      {/* Chat Header */}
      <div className="bg-primary text-primary-content p-4 rounded-t-lg">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span>🤖</span>
          BubbaChat
        </h3>
        <p className="text-sm opacity-90">
          Ask me anything about Pauline as a developer
        </p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-50">
        {messages.map((message) => (
          <BubbaMsg
            key={message.id}
            message={message.content}
            sender={message.sender}
            timeStamp={message.timestamp}
          />
        ))}

        {/* Loading indicator */}
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

        {/* Auto scroll target */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-base-300 bg-base-100 rounded-b-lg">
        <BubbaInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default BubbaChat;
