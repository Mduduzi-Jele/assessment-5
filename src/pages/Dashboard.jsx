/* eslint-disable react/prop-types */
const Dashboard = ({ userId }) => {
  const user = JSON.parse(localStorage.getItem(userId));

  const count = (user, choice) => {
    const answerCounts = new Map();
    user.questionnaire.flatMap((questionnaire) => questionnaire.answers).forEach((answer) => {
      answerCounts.set(answer, answerCounts.get(answer) + 1 || 1);
    });
  
    return answerCounts.get(choice);
  };
  

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard__items">
        <div className="dashboard__items__section-one">
          <div>
            <h2>Number of Questionnaires</h2>
            <h3>{user.questionnaire.length}</h3>
          </div>
          <div>
            <h2>Number of Agreements</h2>
            <h3>{count(user, "agree")}</h3>
          </div>
        </div>
        <div className="dashboard__items__section-two">
          <div>
            <h2>Number of Disagreements</h2>
            <h3>{count(user, "disagree")}</h3>
          </div>
          <div>
            <h2>Number of Neutral</h2>
            <h3>{count(user, "neutral")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
