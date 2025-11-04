import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

interface BubbaMsgProps {
  message: string;
  sender: "bubba" | "user";
  timeStamp?: Date;
}

const BubbaMsg = ({ message, sender, timeStamp }: BubbaMsgProps) => {
  const isBubba = sender === "bubba";

  return (
    <div className={`chat ${isBubba ? "chat-start" : "chat-end"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          {isBubba ? (
            <div className="bg-primary flex items-center justify-center w-full h-full rounded-full text-primary-content text-lg">
              🤖
            </div>
          ) : (
            <div className="bg-secondary flex items-center justify-center w-full h-full rounded-full text-secondary-content text-lg">
              👤
            </div>
          )}
        </div>
      </div>

      <div className="chat-header">
        {isBubba ? "BubbaBot" : "You"}
        {timeStamp && (
          <time className="text-xs opacity-50 ml-1">
            {timeStamp.toLocaleTimeString()}
          </time>
        )}
      </div>

      <div
        className={`chat-bubble ${
          isBubba ? "chat-bubble-primary" : "chat-bubble-secondary"
        }`}
      >
        {isBubba ? (
          <ReactMarkdown
            components={{
              p: ({ children }: { children?: ReactNode }) => (
                <p className="mb-2 last:mb-0">{children}</p>
              ),
              ul: ({ children }: { children?: ReactNode }) => (
                <ul className="list-disc ml-4 mb-2">{children}</ul>
              ),
              ol: ({ children }: { children?: ReactNode }) => (
                <ol className="list-decimal ml-4 mb-2">{children}</ol>
              ),
              li: ({ children }: { children?: ReactNode }) => (
                <li className="mb-1">{children}</li>
              ),
              strong: ({ children }: { children?: ReactNode }) => (
                <strong className="font-bold">{children}</strong>
              ),
              h3: ({ children }: { children?: ReactNode }) => (
                <h3 className="font-bold text-base mt-2 mb-1">{children}</h3>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary-content/80"
                >
                  {children}
                </a>
              ),
            }}
          >
            {message}
          </ReactMarkdown>
        ) : (
          <div className="whitespace-pre-wrap">{message}</div>
        )}
      </div>
    </div>
  );
};

export default BubbaMsg;
