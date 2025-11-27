import { useState } from "react";
import {
  PiThumbsUpThin,
  PiThumbsDownThin,
  PiPaperPlaneRightFill,
} from "react-icons/pi";

interface BubbaFeedbackProps {
  messageId: string;
  onFeedbackSubmit: (
    messageId: string,
    feedback: {
      rating: "positive" | "negative";
      comment?: string;
    }
  ) => void;
}

const BubbaFeedback = ({ messageId, onFeedbackSubmit }: BubbaFeedbackProps) => {
  const [selectedRating, setSelectedRating] = useState<
    "positive" | "negative" | null
  >(null);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClick = (rating: "positive" | "negative") => {
    if (isSubmitted) return;

    setSelectedRating(rating);
    setShowCommentInput(true);
  };

  const handleSubmit = () => {
    if (!selectedRating) return;

    onFeedbackSubmit(messageId, {
      rating: selectedRating,
      comment: comment.trim() || undefined,
    });

    setIsSubmitted(true);
    setComment("");
  };

  const handleCommentKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-xs text-primary-content/60 italic">
        Thank you for your feedback! 💚
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={() => handleRatingClick("positive")}
          className={`btn btn-ghost btn-xs ${
            selectedRating === "positive"
              ? "text-success"
              : "text-primary-content/60 hover:text-success"
          }`}
          title="Good response"
        >
          <PiThumbsUpThin className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleRatingClick("negative")}
          className={`btn btn-ghost btn-xs ${
            selectedRating === "negative"
              ? "text-error"
              : "text-primary-content/60 hover:text-error"
          }`}
          title="Poor response"
        >
          <PiThumbsDownThin className="w-5 h-5" />
        </button>
      </div>

      {!showCommentInput ? (
        <p className="text-xs text-primary-content/60 flex-1">
          Providing Bubba with feedback helps to make him a better assistant!
        </p>
      ) : (
        <>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={handleCommentKeyPress}
            placeholder="Supply your feedback with a comment (optional)"
            className="input input-xs input-bordered bg-primary-content/10 text-primary-content placeholder:text-primary-content/50 flex-1 min-w-[40vw] text-xs"
            maxLength={200}
          />
          <button
            onClick={handleSubmit}
            className="btn btn-ghost btn-xs text-primary-content/80 hover:text-primary-content shrink-0"
            title="Submit feedback"
          >
            <PiPaperPlaneRightFill className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
};

export default BubbaFeedback;
