import { render, screen } from "@testing-library/react";
import Purchase from "../../components/item-container/purchase/purchase";

jest.mock("../../components/item-container/purchase/purchase.css", () => ({}));
jest.mock("../../assets/img/payment-methods/credit/visa.png", () => "visa.png");
jest.mock(
  "../../assets/img/payment-methods/credit/american-express.png",
  () => "amex.png"
);
jest.mock(
  "../../assets/img/payment-methods/credit/master-card.png",
  () => "master.png"
);
jest.mock("../../assets/img/payment-methods/debit/visa.png", () => "visad.png");
jest.mock(
  "../../assets/img/payment-methods/debit/master-card.png",
  () => "masterd.png"
);
jest.mock(
  "../../assets/img/payment-methods/cash/abitab.png",
  () => "abitab.png"
);

describe("Purchase", () => {
  beforeEach(() => render(<Purchase />));
  it("muestra título y cuotas sin interés", () => {
    expect(screen.getByText("Medios de pago")).toBeInTheDocument();
    expect(
      screen.getByText("¡Paga en hasta 12 cuotas sin interes!")
    ).toBeInTheDocument();
  });
  it("renderiza métodos de pago e imágenes", () => {
    expect(screen.getByAltText("Tarjeta de credito Visa")).toBeInTheDocument();
    expect(screen.getByAltText("Efectivo Abitab")).toBeInTheDocument();
    expect(screen.getByText("Conocé otros medios de pago")).toBeInTheDocument();
  });
});
