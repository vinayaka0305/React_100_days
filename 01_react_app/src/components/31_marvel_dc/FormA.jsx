import React from "react";
import { useState } from "react";

const FormA = ({ age, onsubmit }) => {
  const [dcShows, setDcShows] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit({
      type: "Form A",
      age: age,
      dcShows: dcShows,
      marvelShows: null,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Form A</h2>
        <label>
          Select DC Shows:
          <select onChange={(e) => setDcShows(e.target.value)}>
            <option value="">--select--</option>
            <option value="The Flash">The Flash</option>
            <option value="Arrow">Arrow</option>
            <option value="Wonder Women">Wonder Women</option>
            <option value="Super Girl">Super Girl</option>
            <option value="Legends Of Tomorrow">Legends Of Tomorrow</option>
          </select>
        </label>
        <br />
        <label>
          Enter Age:
          <input type="number" value={age} disabled />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormA;
