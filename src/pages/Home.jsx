import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { useState } from "react";
import Create from "./Create";
import Questionnaire from "./Questionnaire";
import Dashboard from "./Dashboard";

const Home = () => {
  const location = useLocation();
  const userData = location.state;
  const [component, setComponent] = useState(3)
  return (
    <div className="home">
      <Navigation userId={userData.userId} component={setComponent}/>
      {component === 1 ? <Dashboard userId={userData.userId} /> : ""}
      {component === 2 ? <Questionnaire userId={userData.userId} /> : ""}
      {component === 3 ? <Create userId={userData.userId} /> : ""}
    </div>
  );
};

export default Home;
