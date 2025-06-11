import { useState } from "react";
import "./reviews.css";
import ReviewComponent from "./new/review";
import { AiFillStar } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import type { Product, Review as ReviewType } from "../../../types/product";

interface ReviewsProps {
  reviews: ReviewType[];
  product: Product;
}

const Reviews = ({ reviews: initialReviews, product }: ReviewsProps) => {
  const createEmptyReview = (): ReviewType => {
    return {
      id: Math.floor(Math.random() * 1000000),
      productId: product.id,
      userId: 1,
      title: "",
      comments: "",
      rating: 0,
      likes: 0,
      dislikes: 0,
    };
  };

  const [reviewList, setReviewList] = useState<ReviewType[]>(initialReviews);
  const [newReviewFormData, setNewReviewFormData] = useState<ReviewType>(
    createEmptyReview()
  );
  const [showNewReviewErrors, setShowNewReviewErrors] =
    useState<boolean>(false);
  const [showReviewsWithType, setShowReviewsWithType] = useState<string>("all");

  const getNumberOfReviewsWithRating = (ratingNumber: number): number => {
    let count = 0;
    reviewList.forEach((review) => {
      if (review.rating === ratingNumber) count++;
    });
    return count;
  };

  let avgRating = 0;
  reviewList.forEach((review) => (avgRating += review.rating));
  avgRating = parseFloat((avgRating / reviewList.length).toFixed(1)); // Ensure avgRating is a number

  const avgRatingStarsElement = [...Array(5)].map((_, index) => (
    <AiFillStar
      key={index}
      className={
        index + 1 <= Math.round(avgRating) ? "star-filled" : "star-empty"
      }
    />
  ));

  const handleVote = (
    id: number,
    vote: "like" | "dislike",
    action: "add" | "remove"
  ) => {
    setReviewList((prevReviews) => {
      return prevReviews.map((prevReview) => {
        if (prevReview.id === id) {
          return vote === "like"
            ? {
                ...prevReview,
                likes:
                  action === "add"
                    ? prevReview.likes + 1
                    : prevReview.likes - 1,
              }
            : {
                ...prevReview,
                dislikes:
                  action === "add"
                    ? prevReview.dislikes + 1
                    : prevReview.dislikes - 1,
              };
        } else {
          return { ...prevReview };
        }
      });
    });
  };

  const isReviewVisible = (reviewRating: number): boolean => {
    if (
      (showReviewsWithType === "positives" && reviewRating < 4) ||
      (showReviewsWithType === "negatives" && reviewRating > 3)
    ) {
      return false;
    } else {
      return true;
    }
  };

  const reviewElements = reviewList.map((review) => (
    <ReviewComponent
      key={review.id}
      review={review}
      handleLike={() => handleVote(review.id, "like", "add")}
      handleDislike={() => handleVote(review.id, "dislike", "add")}
      removeLike={() => handleVote(review.id, "like", "remove")}
      removeDislike={() => handleVote(review.id, "dislike", "remove")}
      isVisible={isReviewVisible(review.rating)}
    />
  ));

  const createRatingStarElementOf = (numberOfStars: number) => {
    return (
      <div className="counter-star">
        {numberOfStars === 1 ? (
          <p className="counter-star-text">{numberOfStars} estrella</p>
        ) : (
          <p>{numberOfStars} estrellas</p>
        )}

        <div className="counter-bar">
          <span
            className="counter-bar-filled"
            style={{
              width: `${
                (getNumberOfReviewsWithRating(numberOfStars) * 100) /
                reviewList.length
              }%`,
            }}
          ></span>
        </div>

        <p>{getNumberOfReviewsWithRating(numberOfStars)}</p>
      </div>
    );
  };

  const handleNewReviewChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewReviewFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNewReviewRating = (ratingNumber: number) => {
    setNewReviewFormData((prevFormData) => ({
      ...prevFormData,
      rating: ratingNumber,
    }));
  };

  const handleNewReviewSubmit = () => {
    const { title, comments, rating } = newReviewFormData;

    if (
      title !== "" &&
      comments.length >= 30 &&
      comments.length <= 1500 &&
      rating !== 0
    ) {
      setReviewList((prevReviews) => [
        { ...newReviewFormData },
        ...prevReviews,
      ]);
      setNewReviewFormData(createEmptyReview());
      setShowNewReviewErrors(false);
    } else {
      setShowNewReviewErrors(true);
    }
  };

  return (
    <section>
      <hr className="product-details-hr" />

      <h2 className="product-details-subtitle">
        Opiniones sobre {product.title}
      </h2>

      <div className="summary-container">
        <div className="avg">
          <p className="avg-rating-review">{avgRating}</p>

          <div>{avgRatingStarsElement}</div>

          <p className="counter-text">
            Promedio entre {reviewList.length} opiniones
          </p>
        </div>

        <div className="counter-container">
          {createRatingStarElementOf(5)}
          {createRatingStarElementOf(4)}
          {createRatingStarElementOf(3)}
          {createRatingStarElementOf(2)}
          {createRatingStarElementOf(1)}
        </div>
      </div>

      <div className="new-container">
        <h3>Cont&aacute; lo que pens&aacute;s de este producto</h3>

        <div className="new-stars">
          <AiFillStar
            className={`new-star star-${
              newReviewFormData.rating >= 1 ? "filled" : "empty"
            }`}
            onClick={() => handleNewReviewRating(1)}
          />

          <AiFillStar
            className={`new-star star-${
              newReviewFormData.rating >= 2 ? "filled" : "empty"
            }`}
            onClick={() => handleNewReviewRating(2)}
          />

          <AiFillStar
            className={`new-star star-${
              newReviewFormData.rating >= 3 ? "filled" : "empty"
            }`}
            onClick={() => handleNewReviewRating(3)}
          />

          <AiFillStar
            className={`new-star star-${
              newReviewFormData.rating >= 4 ? "filled" : "empty"
            }`}
            onClick={() => handleNewReviewRating(4)}
          />

          <AiFillStar
            className={`new-star star-${
              newReviewFormData.rating >= 5 ? "filled" : "empty"
            }`}
            onClick={() => handleNewReviewRating(5)}
          />
          {showNewReviewErrors && newReviewFormData.rating === 0 && (
            <small className="new-error">
              <RiErrorWarningFill />
              Ingres&aacute; una puntuaci&oacute;n.
            </small>
          )}
        </div>

        <div className="new-input-container">
          <label htmlFor="title">
            En pocas palabras, &iquest;Qu&eacute; te pareci&oacute;?
          </label>

          <input
            name="title"
            onChange={handleNewReviewChange}
            value={newReviewFormData.title}
            placeholder="El producto..."
          />
          {showNewReviewErrors && newReviewFormData.title === "" && (
            <small className="new-error">
              <RiErrorWarningFill />
              Complet&aacute; este campo.
            </small>
          )}
        </div>

        <div className="new-input-container">
          <label htmlFor="comments">
            Contale un poco m&aacute;s a otras personas sobre el producto
          </label>

          <textarea
            name="comments"
            onChange={handleNewReviewChange}
            value={newReviewFormData.comments}
            placeholder="El producto me pareci&oacute;..."
            rows={5}
            maxLength={1500}
            minLength={30}
          />

          <div className="new-characters-text">
            {showNewReviewErrors &&
            (newReviewFormData.comments.length < 30 ||
              newReviewFormData.comments.length > 1500) ? (
              <small className="new-error">
                <RiErrorWarningFill />
                Escrib&iacute; al menos 30 caracteres.
              </small>
            ) : (
              <small>Escrib&iacute; al menos 30 caracteres.</small>
            )}
            <small>{newReviewFormData.comments.length} / 1500</small>
          </div>
        </div>

        <button
          className="btn-blue btn-new-review"
          onClick={handleNewReviewSubmit}
        >
          Opinar
        </button>
      </div>

      <div>
        <div className="reviews-main-buttons">
          <button
            className={`btn-category ${
              showReviewsWithType === "all" ? "btn-category-selected" : ""
            }`}
            onClick={() => setShowReviewsWithType("all")}
          >
            Todas
          </button>

          <button
            className={`btn-category ${
              showReviewsWithType === "positives" ? "btn-category-selected" : ""
            }`}
            onClick={() => setShowReviewsWithType("positives")}
          >
            Positivas
          </button>

          <button
            className={`btn-category ${
              showReviewsWithType === "negatives" ? "btn-category-selected" : ""
            }`}
            onClick={() => setShowReviewsWithType("negatives")}
          >
            Negativas
          </button>
        </div>

        {reviewElements}
      </div>
    </section>
  );
};

export default Reviews;
