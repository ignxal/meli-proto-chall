import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OtherSellers from "../../components/item-container/seller/others/othersellers";
jest.mock(
  "../../components/item-container/seller/others/othersellers.css",
  () => ({})
);
describe("OtherSellers", () => {
  it("muestra el botón con precio", () => {
    render(<OtherSellers />);

    expect(screen.getByText("Otras opciones de compra")).toBeInTheDocument();
    expect(screen.getByText(/Ver más opciones desde/i)).toBeInTheDocument();
    expect(screen.getByTestId("price-part")).toHaveTextContent("684.998");
  });

  it("permite hacer submit del formulario", async () => {
    const user = userEvent.setup();
    render(<OtherSellers />);
    const button = screen.getByRole("button");
    await user.click(button);
  });
});
