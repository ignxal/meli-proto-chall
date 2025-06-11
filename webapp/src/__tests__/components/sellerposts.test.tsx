import { render, screen } from "@testing-library/react";
import SellerPosts from "../../components/item-container/seller/posts/sellerposts";

jest.mock("../../assets/img/products/samsungS25Case.jpg", () => "case.jpg");
jest.mock("../../assets/img/products/samsungS22.jpg", () => "s22.jpg");
jest.mock("../../assets/img/products/samsungS25.jpg", () => "s25.jpg");
jest.mock(
  "../../components/card/card",
  () => (props: { title: string; price: number | string }) =>
    (
      <div data-testid="mock-card">
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>
    )
);
jest.mock(
  "../../components/item-container/seller/posts/sellerposts.css",
  () => ({})
);

describe("SellerPosts", () => {
  it("renderiza publicaciones del vendedor", () => {
    render(<SellerPosts />);

    expect(screen.getByText("Publicaciones del vendedor")).toBeInTheDocument();
    expect(
      screen.getByText("Samsung Galaxy S25 Ultra 5G 256GB Celular Libre Nuevo")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Funda para Celular Samsung Galaxy S25")
    ).toBeInTheDocument();
    expect(screen.getByText("Samsung Galaxy S22 128GB")).toBeInTheDocument();
    expect(
      screen.getByText("Ver más publicaciones del vendedor")
    ).toBeInTheDocument();
  });
});
