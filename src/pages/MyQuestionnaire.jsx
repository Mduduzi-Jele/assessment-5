/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const MyQuestionnaire = ({ userId }) => {
  let user = JSON.parse(localStorage.getItem(userId));
  const navigate = useNavigate();

  return (
    <div className="questionnaireList">
      <div>
        <h1 className="questionnaireList__title">My Questionnaires</h1>
        {user.questions.map((questionnaire, index) => {
          return (
            <div className="questionnaireList__item" key={index}>
              <h1>Title: {questionnaire.title}</h1>
              <p>Description: {questionnaire.description}</p>
              <button
                onClick={() =>
                  navigate("viewquestions", {
                    state: { questionnaire, questionnaireId: index, userId },
                  })
                }
              >
                Manage
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyQuestionnaire;
