import { useState } from "react";
import "./review.css";
import { AiFillStar } from "react-icons/ai";
import {
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiThumbUp,
  HiThumbDown,
} from "react-icons/hi";
import type { Review } from "../../../../types/product";

interface ReviewProps {
  review: Review;
  isVisible: boolean;
  handleLike: () => void;
  handleDislike: () => void;
  removeLike: () => void;
  removeDislike: () => void;
}

const ReviewComponent = (props: ReviewProps) => {
  const [vote, setVote] = useState<{ hasVoted: boolean; value: string }>({
    hasVoted: false,
    value: "",
  });

  const handleUserVote = (userVote: "like" | "dislike") => {
    if (vote.hasVoted) {
      if (vote.value === "like") {
        props.removeLike();
      } else {
        props.removeDislike();
      }
    }

    if (userVote === "like") {
      props.handleLike();
    } else {
      props.handleDislike();
    }

    setVote({ hasVoted: true, value: userVote });
  };

  const starsElement = [...Array(5)].map((_, index) => (
    <AiFillStar
      key={index}
      className={
        index + 1 <= props.review.rating
          ? "review-star-filled fs-18px"
          : "review-star-empty fs-18px"
      }
    />
  ));

  return (
    <article
      className={`review-container ${!props.isVisible ? "review-hidden" : ""}`}
    >
      {starsElement}

      <h3>{props.review.title}</h3>

      <p>{props.review.comments}</p>

      <div className="review-likes-container">
        <div className="review-likes">
          {vote.value === "like" ? (
            <HiThumbUp className="review-thumb-icon" />
          ) : (
            <HiOutlineThumbUp
              className="review-thumb-icon"
              onClick={() => handleUserVote("like")}
            />
          )}

          {props.review.likes}
        </div>

        <div className="review-likes">
          {vote.value === "dislike" ? (
            <HiThumbDown className="review-thumb-icon" />
          ) : (
            <HiOutlineThumbDown
              className="review-thumb-icon"
              onClick={() => handleUserVote("dislike")}
            />
          )}

          {props.review.dislikes}
        </div>
      </div>
    </article>
  );
};

export default ReviewComponent;
