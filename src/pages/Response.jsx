/* eslint-disable react/prop-types */
import { useState } from "react";

const Response = ({ question, index, response }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    response[index] = e.target.value;
  };

  return (
    <div className="response">
      <div className="response__title">{question}</div>
      <div className="response__options">
        <label>
          <input
            type="radio"
            name={`choice${index}`}
            value="agree"
            checked={selectedOption === "agree"}
            onChange={(e) => handleOptionChange(e)}
          />
          <span>Agree</span>
        </label>
        <label>
          <input
            type="radio"
            value="neutral"
            name={`choice${index}`}
            checked={selectedOption === "neutral"}
            onChange={(e, index) => handleOptionChange(e, index)}
          />
          <span>Neutral</span>
        </label>
        <label>
          <input
            type="radio"
            value="disagree"
            name={`choice${index}`}
            checked={selectedOption === "disagree"}
            onChange={(e, index) => handleOptionChange(e, index)}
          />
          <span>Disagree</span>
        </label>
      </div>
    </div>
  );
};

export default Response;
