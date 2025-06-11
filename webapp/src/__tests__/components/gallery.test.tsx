import { render, screen, fireEvent } from "@testing-library/react";
import Gallery from "../../components/item-container/gallery/gallery";
import type { Pictures } from "../../types/product";

jest.mock("../../components/item-container/gallery/gallery.css", () => ({}));

describe("Gallery", () => {
  const mockPictures: Pictures[] = [
    {
      id: "1",
      productId: "MLA83796059239",
      url: "url2",
      secure_url: "https:",
      size: "500x496",
      max_size: "1200x1192",
      quality: "",
      selected: false,
    },
    {
      id: "2",
      productId: "MLA83796059239",
      url: "url2",
      secure_url: "https:",
      size: "500x496",
      max_size: "1200x1192",
      quality: "",
      selected: false,
    },
  ];

  it("muestra la imagen principal y miniaturas", () => {
    render(<Gallery pictures={mockPictures} />);

    expect(screen.getByAltText("Imagen del producto")).toHaveAttribute(
      "src",
      "url2"
    );
    expect(
      screen.getAllByAltText("Imagen miniatura del producto")
    ).toHaveLength(2);
  });

  it("cambia la imagen principal al hacer clic en una miniatura", () => {
    render(<Gallery pictures={mockPictures} />);

    const thumbnails = screen.getAllByAltText("Imagen miniatura del producto");
    fireEvent.click(thumbnails[1]);

    expect(screen.getByAltText("Imagen del producto")).toHaveAttribute(
      "src",
      "url2"
    );
  });
});
