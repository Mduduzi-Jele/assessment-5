/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
const Questionnaires = () => {
  const navigate = useNavigate();
  const localStorageKeys = Object.keys(localStorage);
  return (
    <div className="questionnaireList">
      {localStorageKeys.map((userId, index) => {
        const user = JSON.parse(localStorage.getItem(userId));
        return (
          <div key={index}>
            {user.questions.length
              ? user.questions.map((myQuestionare, index) => {
                  return (
                    <div className="questionnaireList__item" key={index}>
                      <h1>Title: {myQuestionare.title}</h1>
                      <p>Description: {myQuestionare.description}</p>
                      <button
                        onClick={() =>
                          navigate("answer", {
                            state: {
                              questions: myQuestionare.questions,
                              myQuestionareId: index,
                              userId: userId,
                            },
                          })
                        }
                      >
                        Take
                      </button>
                    </div>
                  );
                })
              : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Questionnaires;
