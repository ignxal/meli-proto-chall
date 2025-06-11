import { render, screen, fireEvent } from "@testing-library/react";
import QuestionsAndAnswers from "../../components/item-container/qa/questionsanswers";
import type { QA } from "../../types/product";

jest.mock(
  "../../components/item-container/qa/questionsanswers.css",
  () => ({})
);
jest.mock("../../components/item-container/qa/new/question.css", () => ({}));

const mockQAs: QA[] = [
  {
    question: "¿Funciona bien?",
    answer: "Sí",
    date: "2024-05-01",
    id: 1,
    userId: 1,
    productId: "MLA83796059239",
  },
];

describe("QuestionsAndAnswers", () => {
  beforeEach(() => render(<QuestionsAndAnswers qas={mockQAs} />));

  it("renderiza sección inicial y botones FAQ", () => {
    expect(screen.getByText("Preguntas y respuestas")).toBeInTheDocument();
    expect(screen.getByText("¿Qué querés saber?")).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", {
        name: /Costo y tiempo de envío|Preguntar/,
      })
    ).toHaveLength(2);
  });

  it("agrega nueva pregunta", () => {
    fireEvent.change(screen.getByPlaceholderText("Escribí tu pregunta..."), {
      target: { value: "¿Tiene garantía?" },
    });
    fireEvent.click(screen.getByText("Preguntar"));
    expect(screen.getByText("¿Tiene garantía?")).toBeInTheDocument();
  });

  it("muestra error si input vacío", () => {
    fireEvent.click(screen.getByText("Preguntar"));
    expect(screen.getByText("Completá este campo.")).toBeInTheDocument();
  });
});
