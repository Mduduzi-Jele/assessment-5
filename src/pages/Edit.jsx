import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const userId = location.state.userId;
  const questionnaireId = location.state.questionnaireId;
  const quetionId = location.state.quetionId;

  const user = JSON.parse(localStorage.getItem(userId));

  const [question, setQuestion] = useState(
    user.questions[questionnaireId].questions[quetionId]
  );

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAdd = () => {
    user.questions[questionnaireId].questions[quetionId] = question;
    console.log(user);
    localStorage.setItem(userId, JSON.stringify({ ...user }));
    console.log("Added");
    navigate(-1)
  };

  return (
    <div className="edit">
      <h1>Edit the question</h1>
      <div className="edit__content">
        <input
          type="text"
          name="question"
          placeholder="Add your question here."
          onChange={(e) => handleQuestionChange(e)}
          value={question}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Edit;
