import React, { useState } from "react";

const Example = () => {
  const [result, setResult] = useState("");
  const [ratings, setRatings] = useState({
    AV: null,
    KS: null,
    GS: null,
  });

  const handleChagne = (teacher, val) => {
    setRatings((prevRating) => ({ ...prevRating, [teacher]: parseInt(val) }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(Object.values(ratings).some((rating)=>rating === null)){
      setResult("please give ratings to all")
      return;
    }
    const sortedTeacher = Object.entries(ratings).sort(([,a],[,b])=>b-a);
    setResult(`The teacher of the year is ${sortedTeacher[0][0]}`)
  }

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <h2>Teacher review</h2>
        <label>Names </label>
        <label>1 </label>
        <label>2 </label>
        <label>3</label>
        <br />
        <br />
        <label id="first">
          AV &nbsp;
          <input
            type="radio"
            value="1"
            name="AV"
            onChange={(e) => handleChagne("AV", e.target.value)}
          />
          <input
            type="radio"
            value="2"
            name="AV"
            onChange={(e) => handleChagne("AV", e.target.value)}
          />
          <input
            type="radio"
            value="3"
            name="AV"
            onChange={(e) => handleChagne("AV", e.target.value)}
          />
        </label>
        <br />
        <label id="first">
          KS &nbsp;
          <input
            type="radio"
            value="1"
            name="KS"
            onChange={(e) => handleChagne("KS", e.target.value)}
          />
          <input
            type="radio"
            value="2"
            name="KS"
            onChange={(e) => handleChagne("KS", e.target.value)}
          />
          <input
            type="radio"
            value="3"
            name="KS"
            onChange={(e) => handleChagne("KS", e.target.value)}
          />
        </label>
        <br />
        <label id="first">
          GS &nbsp;
          <input
            type="radio"
            value="1"
            name="GS"
            onChange={(e) => handleChagne("GS", e.target.value)}
          />
          <input
            type="radio"
            value="2"
            name="GS"
            onChange={(e) => handleChagne("GS", e.target.value)}
          />
          <input
            type="radio"
            value="3"
            name="GS"
            onChange={(e) => handleChagne("GS", e.target.value)}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Sumit" />
      </form>
      <div>
        {result}
      </div>
    </div>
  );
};

export default Example;
