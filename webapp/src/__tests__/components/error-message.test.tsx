import { render, screen } from "@testing-library/react";
import ErrorMessage from "../../components/error/message";

jest.mock("../../components/error/message.css", () => ({}));

describe("ErrorMessage component", () => {
  it("renderiza correctamente el mensaje 404", () => {
    render(<ErrorMessage type="404" />);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Producto no encontrado"
    );
    expect(screen.getByText(/no existe o fue removido/i)).toBeInTheDocument();
  });

  it("renderiza correctamente el mensaje 500", () => {
    render(<ErrorMessage type="500" />);

    expect(screen.getByRole("alert")).toHaveTextContent("Error de conexión");
    expect(
      screen.getByText(/verifica tu conexión con la API/i)
    ).toBeInTheDocument();
  });
});
