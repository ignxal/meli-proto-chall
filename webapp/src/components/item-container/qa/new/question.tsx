import "./question.css";
import { BsArrowReturnRight } from "react-icons/bs";

interface QuestionProps {  
  question: string;
  answer?: string;
  date?: string;
}

const Question = ({ question, answer, date }: QuestionProps) => {
	return (
		<div className="question-container">
			<p className="question-text-container">
				{ question }
				<span className="blue-anchor">Denunciar</span>
			</p>

			{ answer &&
				<div className="answer-container">
					<BsArrowReturnRight className="answer-arrow" />

					<div className="answer-text-container">
						<span>{ answer }</span>
						<span className="answer-date">{ date }</span>
						<span className="blue-anchor">Denunciar</span>
					</div>
				</div>
			}
		</div>
	);
}

export default Question;
