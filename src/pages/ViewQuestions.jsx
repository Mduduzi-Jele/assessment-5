import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ViewQuestions = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [questionnaireId, setQuestionnaireId] = useState(
    location.state.questionnaireId
  );
  const [userId, setuserId] = useState(location.state.userId);

  const user = JSON.parse(localStorage.getItem(userId));

  const handleDelete = (questionId) => {
    user.questions[questionnaireId].questions.splice(questionId, 1);
    localStorage.setItem(userId, JSON.stringify({ ...user }));
    window.location.reload();
    console.log("deleted");
  };

  return (
    <div className="viewquestions">
      <div className="viewquestions__content">
        <p>Title: {user.questions[questionnaireId].title}</p>
        <p>Description: {user.questions[questionnaireId].description}</p>
        {user.questions[questionnaireId].questions.length
          ? user.questions[questionnaireId].questions.map((question, index) => {
              return (
                <div key={index}>
                  <div className="question">
                    <h3>{question}</h3>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        height={60}
                        width={60}
                        onClick={() =>
                          navigate("edit", {
                            state: {
                              questionnaireId,
                              userId,
                              quetionId: index,
                            },
                          })
                        }
                      >
                        <path d="M212-196h36.333l431.001-430.334-37-37L212-232.333V-196Zm518.667-447.667-71-71L703-758q7.667-7.667 18-7.667T739-758l35 35q7.667 7.667 7.333 18-.333 10.333-8 18.666l-42.666 42.667ZM713.334-627 258.333-172H188v-70.333l455-455.001L713.334-627Zm-52.667-18.667-18.333-17.667 37 37-18.667-19.333Z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        height={60}
                        width={60}
                        onClick={() => handleDelete(index)}
                      >
                        <path d="M308-172q-22.833 0-39.417-16.583Q252-205.167 252-228v-498h-40v-24h145.333v-26h245.334v26H748v24h-40v498q0 23.85-16.075 39.925Q675.85-172 652-172H308Zm376-554H276v498q0 14 9.333 23 9.334 9 22.667 9h344q12 0 22-10t10-22v-498ZM403.333-277.333h24v-368h-24v368Zm129.334 0h24v-368h-24v368ZM276-726v530-530Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default ViewQuestions;
