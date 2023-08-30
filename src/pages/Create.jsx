/* eslint-disable react/prop-types */
import { useState } from "react";
import Question from "../components/Question";

const Create = ({ userId }) => {
  const user = JSON.parse(localStorage.getItem(userId));
  const [question, setQuestion] = useState("");
  const [questionId, setQuestionId] = useState(false);
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAddOnclick = (e) => {
    e.preventDefault();
    if (questionId !== false ) {
      user.questions[questionId] = question;
      localStorage.setItem(userId, JSON.stringify({ ...user }));
      setQuestionId(false)
    } else {
      localStorage.setItem(
        userId,
        JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
          questions: [...user.questions, question],
          questionnaire: [...user.questionnaire],
        })
      );
      setQuestionId(false);
    }
    window.location.reload()
  };
  return (
    <div className="create">
      <h1>Creating a Questionnaire</h1>
      <input
        type="text"
        name="question"
        placeholder="Add your question here"
        onChange={(e) => handleQuestionChange(e)}
        value={question}
      />
      <button onClick={handleAddOnclick}>Add</button>
      <h1>List of Questions</h1>
      {user.questions.length ? (
        user.questions.map((question, index) => {
          return (
            <Question
              key={index}
              index={index}
              userId={userId}
              question={question}
              setQuestion={setQuestion}
              setQuestionId={setQuestionId}
            />
          );
        })
      ) : (
        <div>
          <h2>There are currently no questions</h2>
        </div>
      )}
    </div>
  );
};

export default Create;
