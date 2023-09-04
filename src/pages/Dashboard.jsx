/* eslint-disable react/prop-types */
const Dashboard = ({ userId }) => {
  const user = JSON.parse(localStorage.getItem(userId));

  const questionnaireNo = () => {
    let count = 0
    const localStorageKeys = Object.keys(localStorage)
    localStorageKeys.map((userId) => {
      const user = JSON.parse(localStorage.getItem(userId))
      count = count + user.questionnaire.length
    })
    return count
  }

  const count = (choice) => {
    let count = 0
    const localStorageKeys = Object.keys(localStorage)
    localStorageKeys.map((userId) => {
      const user = JSON.parse(localStorage.getItem(userId))
      user.questionnaire.map( questionnaire => {
        questionnaire.answers.map( answer => {
          if(answer === choice){
            count++
          }
        })
      })
    })
    return count
  };
  

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard__items">
        <div className="dashboard__items__section-one">
          <div>
            <h2>Number of Questionnaires</h2>
            <h3>{questionnaireNo()}</h3>
          </div>
          <div>
            <h2>Number of Agreements</h2>
            <h3>{count("agree")}</h3>
          </div>
        </div>
        <div className="dashboard__items__section-two">
          <div>
            <h2>Number of Disagreements</h2>
            <h3>{count("disagree")}</h3>
          </div>
          <div>
            <h2>Number of Neutral</h2>
            <h3>{count("neutral")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
