import { render, screen } from "@testing-library/react";
import Navbar from "../../components/navbar/navbar";

jest.mock("../../components/navbar/navbar.css", () => ({}));
jest.mock("../../assets/logo.png", () => "mocked-logo.png");

describe("Navbar component", () => {
  it("renderiza el logo y la barra de búsqueda", () => {
    render(<Navbar />);

    expect(
      screen.getByAltText(
        "Logo de Mercado Libre: apreton de manos con texto mercado libre"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Buscar productos, marcas y más...")
    ).toBeInTheDocument();
  });

  it("muestra las secciones del navbar", () => {
    const { getByText } = render(<Navbar />);

    expect(getByText("Categorías")).toBeInTheDocument();
    expect(getByText("Ofertas")).toBeInTheDocument();
    expect(getByText("Cupones")).toBeInTheDocument();
    expect(getByText("Supermercado")).toBeInTheDocument();
    expect(getByText("Moda")).toBeInTheDocument();
    expect(getByText("Mercado Play")).toBeInTheDocument();
    expect(getByText("Vender")).toBeInTheDocument();
    expect(getByText("Ayuda")).toBeInTheDocument();
    expect(getByText("Creá tu cuenta")).toBeInTheDocument();
    expect(getByText("Ingresá")).toBeInTheDocument();
    expect(getByText("Mis compras")).toBeInTheDocument();
  });
});
