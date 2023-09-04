import { useLocation, useNavigate } from "react-router-dom";
import Response from "./Response";
import { useState } from "react";
const View = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const questions = location.state.questions;
  const myQuestionareId = location.state.myQuestionareId;
  const userId = location.state.userId;
  const user = JSON.parse(localStorage.getItem(userId));
  const [response] = useState([]);

  const handleClick = () => {
    const newResponse = [];
    response.forEach((response) => {
      newResponse.push(response);
    });

    const questionnaireResponse = {
      title: user.questions[myQuestionareId].title,
      description: user.questions[myQuestionareId].description,
      questions: user.questions[myQuestionareId].questions,
      answers: newResponse,
    };
    user.questionnaire = [...user.questionnaire, questionnaireResponse];
    localStorage.setItem(userId, JSON.stringify(user));
    navigate(-1)
  };

  return (
    <div className="view">
      <div className="view__content">
        <h1>Take a survey</h1>
        {questions.map((question, index) => {
          return (
            <div className="view__content__items" key={index}>
              <Response question={question} index={index} response={response} />
            </div>
          );
        })}
        <button onClick={handleClick}>submit</button>
      </div>
    </div>
  );
};

export default View;
