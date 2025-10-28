import { useState } from "react";

interface BubbaInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

const BubbaInput = ({
  onSendMessage,
  disabled = false,
  placeholder = "Ask Bubba anything about Pauline's work...",
}: BubbaInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <div className="flex-1 relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className="input input-bordered w-full focus:outline-none focus:border-[var(--color-freshLime)] focus:shadow-xs focus:shadow-[var(--color-freshLime)]/10 pr-16"
          maxLength={200}
        />
        <div
          className={`absolute z-10 pointer-events-none right-3 top-1/2 transform -translate-y-1/2 text-xs ${
            message.length > 180
              ? "text-red-500"
              : message.length > 150
              ? "text-yellow-500"
              : "text-gray-500"
          }`}
        >
          {message.length}/200
        </div>
      </div>

      <button
        type="submit"
        disabled={disabled || !message.trim()}
        className="btn btn-primary disabled:opacity-50"
        title="Send message"
      >
        {disabled ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        )}
      </button>
    </form>
  );
};

export default BubbaInput;
