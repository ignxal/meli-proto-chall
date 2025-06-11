import { useState } from "react";
import "./questionsanswers.css";
import Question from "./new/question";
import type { QA } from "../../../types/product";

import { RiErrorWarningFill } from "react-icons/ri";

interface QAsProps {
  qas: QA[];
}

const QuestionsAndAnswers = ({ qas }: QAsProps) => {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [newQuestions, setNewQuestions] = useState<string[]>([]);
  const [showNewQuestionError, setShowNewQuestionError] =
    useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuestion(event.target?.value);
  };

  const handleSubmit = () => {
    if (newQuestion !== "") {
      setNewQuestions((prevState) => [newQuestion, ...prevState]);
      setNewQuestion("");
      setShowNewQuestionError(false);
    } else {
      setShowNewQuestionError(true);
    }
  };

  const newQuestionElements = newQuestions.map((question, index) => (
    <Question key={index} question={question} />
  ));

  const questionElements = qas.map((question, index) => (
    <Question
      key={index}
      question={question.question}
      answer={question.answer}
      date={question.date}
    />
  ));

  return (
    <section className="questAns-container mb-24px">
      <hr className="product-details-hr" />

      <h2 className="product-details-subtitle">Preguntas y respuestas</h2>

      <h3>&iquest;Qu&eacute; quer&eacute;s saber?</h3>

      <div className="faq-buttons">
        <button className="btn-light-blue">
          Costo y tiempo de env&iacute;o
        </button>
        <button className="btn-light-blue">Devoluciones gratis</button>
        <button className="btn-light-blue">Medios de pago y promociones</button>
        <button className="btn-light-blue">Garant&iacute;a</button>
      </div>

      <h3>Preguntale al vendedor</h3>

      <div className="question-input">
        <input
          type="text"
          name="newQuestion"
          onChange={handleChange}
          value={newQuestion}
          placeholder="Escrib&iacute; tu pregunta..."
        />

        <button className="btn-blue" onClick={handleSubmit}>
          Preguntar
        </button>
      </div>

      {showNewQuestionError && newQuestion.length <= 0 && (
        <small className="new-review-error">
          <RiErrorWarningFill />
          Complet&aacute; este campo.
        </small>
      )}

      <h3>&Uacute;ltimas realizadas</h3>

      <div className="last-questions">
        {newQuestionElements}
        {questionElements}
      </div>

      <span className="blue-anchor">Ver todas las preguntas</span>
    </section>
  );
};

export default QuestionsAndAnswers;
