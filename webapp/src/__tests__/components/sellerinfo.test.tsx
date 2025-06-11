import { render, screen } from "@testing-library/react";
import SellerInfo from "../../components/item-container/seller/info/sellerinfo";

jest.mock("../../assets/img/seller/samsung_2.jpg", () => "logo.jpg");
jest.mock("../../assets/img/seller/samsung_banner.jpg", () => "banner.jpg");
jest.mock(
  "../../components/item-container/seller/info/sellerinfo.css",
  () => ({})
);

describe("SellerInfo", () => {
  it("renderiza correctamente la información del vendedor", () => {
    render(<SellerInfo />);

    expect(screen.getByText("Samsung")).toBeInTheDocument();
    expect(
      screen.getByText("Tienda oficial de Mercado Libre")
    ).toBeInTheDocument();
    expect(screen.getByText("+1000")).toBeInTheDocument();
    expect(screen.getByText("MercadoLíder Platinum")).toBeInTheDocument();
    expect(screen.getByText("Ventas concretadas")).toBeInTheDocument();
    expect(screen.getByText("Brinda buena atención")).toBeInTheDocument();
    expect(
      screen.getByText("Despacha sus productos a tiempo")
    ).toBeInTheDocument();
    expect(screen.getByText("Ir a la Tienda oficial")).toBeInTheDocument();
  });
});
