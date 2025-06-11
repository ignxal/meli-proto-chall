import { render, screen } from "@testing-library/react";
import Description from "../../components/item-container/description/description";

jest.mock(
  "../../components/item-container/description/description.css",
  () => ({})
);

describe("Description", () => {
  it("muestra correctamente el texto de descripción", () => {
    const mockDescription = "Este es un producto de prueba.";
    render(<Description description={mockDescription} />);

    expect(screen.getByText("Descripción")).toBeInTheDocument();
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });
});
