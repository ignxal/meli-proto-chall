import { render, screen } from "@testing-library/react";
import Question from "../../components/item-container/qa/new/question";

jest.mock("../../components/item-container/qa/new/question.css", () => ({}));

describe("Question", () => {
  it("renderiza pregunta sin respuesta", () => {
    render(<Question question="¿Nuevo?" />);
    expect(screen.getByText("¿Nuevo?")).toBeInTheDocument();
    expect(screen.getByText("Denunciar")).toBeInTheDocument();
  });

  it("renderiza con respuesta y fecha", () => {
    render(<Question question="¿Funciona?" answer="Sí" date="2024-06-10" />);
    expect(screen.getByText("Sí")).toBeInTheDocument();
    expect(screen.getByText("2024-06-10")).toBeInTheDocument();
  });
});
