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
              <div>
                <div>
                  <h1>Title: {questionnaire.title}</h1>
                  <p>Description: {questionnaire.description}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  height={60}
                  width={60}
                  onClick={() => {
                    user.questions.splice(index, 1)
                    console.log(user)
                    localStorage.setItem(userId, JSON.stringify({...user}))
                    window.location.reload()
                  }}
                >
                  <path d="M308-172q-22.833 0-39.417-16.583Q252-205.167 252-228v-498h-40v-24h145.333v-26h245.334v26H748v24h-40v498q0 23.85-16.075 39.925Q675.85-172 652-172H308Zm376-554H276v498q0 14 9.333 23 9.334 9 22.667 9h344q12 0 22-10t10-22v-498ZM403.333-277.333h24v-368h-24v368Zm129.334 0h24v-368h-24v368ZM276-726v530-530Z" />
                </svg>
              </div>
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
