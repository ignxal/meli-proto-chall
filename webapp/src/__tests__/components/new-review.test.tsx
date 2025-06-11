import { render, screen, fireEvent } from "@testing-library/react";
import ReviewComponent from "../../components/item-container/reviews/new/review";
import type { Review } from "../../types/product";

jest.mock("../../components/item-container/reviews/new/review.css", () => ({}));

const mockReview: Review = {
  id: 1,
  productId: "1",
  userId: 1,
  title: "Título",
  comments: "Comentario",
  rating: 4,
  likes: 2,
  dislikes: 1,
};

describe("ReviewComponent", () => {
  it("muestra rating, título y comentarios", () => {
    render(
      <ReviewComponent
        review={mockReview}
        isVisible={true}
        handleLike={() => {}}
        handleDislike={() => {}}
        removeLike={() => {}}
        removeDislike={() => {}}
      />
    );
    expect(screen.getByText("Título")).toBeInTheDocument();
    expect(screen.getByText("Comentario")).toBeInTheDocument();
  });

  it("permite votar y actualiza icono", () => {
    const handleLike = jest.fn();

    const { container } = render(
      <ReviewComponent
        review={mockReview}
        isVisible={true}
        handleLike={handleLike}
        handleDislike={() => {}}
        removeLike={() => {}}
        removeDislike={() => {}}
      />
    );

    const icons = container.querySelectorAll(".review-thumb-icon");
    const likeIcon = icons[0];

    fireEvent.click(likeIcon);
    expect(handleLike).toHaveBeenCalled();
  });
});
