import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { useState } from "react";
import Create from "./Create";
import MyQuestionnaire from "./MyQuestionnaire";
import Dashboard from "./Dashboard";
import Questionnaires from "./Questionnaires";

const Home = () => {
  const location = useLocation();
  const userData = location.state;
  const [component, setComponent] = useState(1)
  return (
    <div className="home">
      <Navigation userId={userData.userId} component={setComponent}/>
      {component === 1 ? <Dashboard userId={userData.userId} /> : ""}
      {component === 2 ? <Questionnaires userId={userData.userId} /> : ""}
      {component === 3 ? <Create userId={userData.userId} /> : ""}
      {component === 4 ? <MyQuestionnaire userId={userData.userId} /> : ""}
      
    </div>
  );
};

export default Home;
