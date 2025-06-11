import { render, screen } from "@testing-library/react";
import Navbar from "../../components/navbar/navbar";

jest.mock("../../components/navbar/navbar.css", () => ({}));
jest.mock("../../assets/logo.png", () => "mocked-logo.png");

jest.mock("../../hooks/use-window-width", () => () => 1400);

describe("Navbar component", () => {
  it("renderiza correctamente el logo y la barra de búsqueda en desktop", () => {
    render(<Navbar />);

    expect(
      screen.getByAltText(
        "Logo de Mercado Libre: apreton de manos con texto mercado libre"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Buscar productos, marcas y más...")
    ).toBeInTheDocument();

    expect(screen.getByText("Categorías")).toBeInTheDocument();
    expect(screen.getByText("Ofertas")).toBeInTheDocument();
    expect(screen.getByText("Mis compras")).toBeInTheDocument();
  });
});
