/* eslint-disable react/prop-types */
import { useState } from "react";
import Question from "../components/Question";

const Create = ({ userId }) => {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddOnclick = () => {
    console.log(edit);
    if (edit !== null) {
      questions[edit] = question;
      setEdit(null);
    } else {
      setQuestions((prev) => [...prev, question]);
    }
  };

  const handleSubmit = () => {
    const user = JSON.parse(localStorage.getItem(userId));
    user.questions = [
      ...user.questions,
      { title: title, description: description, questions: questions },
    ];
    localStorage.setItem(userId, JSON.stringify(user));
    console.log("Added questions to user", user);
    setCount(0);
    setTitle("");
    setDescription("");
    setQuestions([]);
  };

  return (
    <div className="create">
      <h1>Creating a Questionnaire</h1>
      {count === 0 ? (
        <>
          <input
            type="text"
            name="title"
            placeholder="Add a title here"
            onChange={(e) => handleTitleChange(e)}
            value={title}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            onClick={() => setCount((prev) => prev + 1)}
            className="create__next"
          >
            <path d="M607.461-480 298.846-788.615q-8.846-8.846-8.731-21.27.116-12.423 8.962-21.269Q307.923-840 320.346-840q12.423 0 21.269 8.846l305.462 305.692q9.692 9.693 14.154 21.616 4.461 11.923 4.461 23.846t-4.461 23.846q-4.462 11.923-14.154 21.616L341.385-128.846q-8.846 8.846-21.154 8.731-12.308-.116-21.154-8.962t-8.846-21.269q0-12.423 8.846-21.269L607.461-480Z" />
          </svg>
        </>
      ) : count === 1 ? (
        <>
          <input
            type="text"
            name="question"
            placeholder="Add a description here"
            onChange={(e) => handleDescriptionChange(e)}
            value={description}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            onClick={() => setCount((prev) => prev + 1)}
            className="create__next"
          >
            <path d="M607.461-480 298.846-788.615q-8.846-8.846-8.731-21.27.116-12.423 8.962-21.269Q307.923-840 320.346-840q12.423 0 21.269 8.846l305.462 305.692q9.692 9.693 14.154 21.616 4.461 11.923 4.461 23.846t-4.461 23.846q-4.462 11.923-14.154 21.616L341.385-128.846q-8.846 8.846-21.154 8.731-12.308-.116-21.154-8.962t-8.846-21.269q0-12.423 8.846-21.269L607.461-480Z" />
          </svg>
        </>
      ) : count === 2 ? (
        <>
          <input
            type="text"
            name="question"
            placeholder="Add your question here."
            onChange={(e) => handleQuestionChange(e)}
            value={question}
          />
          <button onClick={handleAddOnclick}>Add</button>
        </>
      ) : (
        ""
      )}

      <h1>List of Questions</h1>
      <div className="create__items">
        {questions.length ? (
          questions.map((question, index) => {
            return (
              <Question
                setEdit={setEdit}
                setQuestion={setQuestion}
                setQuestions={setQuestions}
                questions={questions}
                userId={userId}
                question={question}
                key={index}
                questionId={index}
              />
            );
          })
        ) : (
          <div className="create__empty">
            <h2>There are currently no questions</h2>
          </div>
        )}
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Create;
