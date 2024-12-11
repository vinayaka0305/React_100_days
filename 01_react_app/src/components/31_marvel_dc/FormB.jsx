import React, { useState } from "react";

const FormB = ({ age, onsubmit }) => {
  const [marvelShows, setMarvelShows] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit({
      type: "Form B",
      age: age,
      dcShows: null,
      marvelShows: marvelShows,
     
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Form B</h2>
        <label>
            Select Marvel Shows:
          <select onChange={(e)=>setMarvelShows(e.target.value)}>
            <option value="">--select--</option>
            <option value="WandaVison">WandaVison</option>
            <option value="The Falcon and The Winder Soldier">
              The Falcon and The Winder Soldier
            </option>
            <option value="Loki">Loki</option>
            <option value="What If...">What If...</option>
          </select>
        </label>
        <br />
        <label>
        Enter Age:
            <input type="number" value={age} disabled/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormB;
