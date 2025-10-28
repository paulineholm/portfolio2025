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
        <div className="whitespace-pre-wrap">{message}</div>
      </div>
    </div>
  );
};

export default BubbaMsg;
