import React, { useEffect, useState } from "react";
import FormA from "./FormA";
import FormB from "./FormB";
import Summary from "./Summary";

const Forms = () => {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState("");
  const [formData, setFormData] = useState({});

  console.log(formData);

  useEffect(() => {
    if (formData.marvelShows || formData.dcShows) {
      setStep(4);
    }
  });

  const handleFormData = (data) => {
    setFormData(data);
  };

  const handleSummary = () => {
    setStep(1);
    setAge("");
    setFormData({});
  };

  return (
    <div>
      {(step === 1 || !age) && (
        <div>
          <h1>Step : 1 Select form Type and Enter Age</h1>
          <label>
            Enter your age :
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <br />
          <label>
            Select Form Type :
            <select onChange={(e) => setStep(parseInt(e.target.value))}>
              <option value={1}>--Select--</option>
              <option value={2}>Form A</option>
              <option value={3}>Form B</option>
            </select>
          </label>
        </div>
      )}
      {step === 2 && (
        <div>
          <FormA age={age} onsubmit={handleFormData} />
        </div>
      )}
      {step === 3 && (
        <div>
          <FormB age={age} onsubmit={handleFormData} />
        </div>
      )}
      {(step === 2 || step === 3) && age ? (
        <button onClick={() => setStep(1)}>Go back</button>
      ) : null}
      {step === 4 && (
        <div>
          <Summary formData={formData} />
          <button onClick={handleSummary}>Start Over</button>
        </div>
      )}
    </div>
  );
};

export default Forms;
