/* eslint-disable react/prop-types */
import { useState } from "react";
import Response from "../pages/Response";

const Questionnaire = ({ userId }) => {
  let user = JSON.parse(localStorage.getItem(userId));
  let [responses, setResponses] = useState([]);

  const handleSubmit = () => {
    const newResponses = [];
    responses.forEach((response) => {
      newResponses.push(response);
    });
    user.questionnaire = [
      ...user.questionnaire,
      { questions: user.questions, answers: newResponses },
    ];
    console.log(user);
    localStorage.setItem(userId, JSON.stringify(user));
  };

  return (
    <div className="questionnaire">
      <h1>Questionnaire</h1>
      {user.questions ? (
        user.questions.map((question, index) => (
          <Response
            response={responses}
            key={index}
            index={index}
            question={question}
            setQuestions={setResponses}
          />
        ))
      ) : (
        <div>
          <h3>There are currently no questions</h3>
        </div>
      )}
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
};

export default Questionnaire;
