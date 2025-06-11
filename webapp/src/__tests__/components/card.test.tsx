import { render, screen } from "@testing-library/react";
import Card from "../../components/card/card";

jest.mock("../../components/card/card.css", () => ({}));

describe("Card component", () => {
  it("muestra los datos del producto correctamente", () => {
    render(
      <Card
        picture="https://example.com/product.jpg"
        freeShipping={true}
        title="Producto de prueba"
        price={1999}
      />
    );

    expect(screen.getByAltText("Imagen de producto")).toHaveAttribute(
      "src",
      "https://example.com/product.jpg"
    );
    expect(screen.getByText(/\$ 1.999/)).toBeInTheDocument(); // Formato argentino
    expect(screen.getByText("Envío gratis")).toBeInTheDocument();
    expect(screen.getByText("Producto de prueba")).toBeInTheDocument();
  });

  it("no muestra el mensaje de envío gratis si `freeShipping` es false", () => {
    render(
      <Card
        picture="https://example.com/product.jpg"
        freeShipping={false}
        title="Producto sin envío gratis"
        price={1500}
      />
    );

    expect(screen.queryByText("Envío gratis")).not.toBeInTheDocument();
  });
});
