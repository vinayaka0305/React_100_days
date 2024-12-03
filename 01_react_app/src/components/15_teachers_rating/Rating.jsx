import React, { useState } from "react";

const Rating = () => {
  const [ratings, setRatings] = useState({
    "Miss Mary": null,
    "Mr.Vikram": null,
    "RK Kumar": null,
  });

  const [result, setResult] = useState("");

  const handleRatingChange = (teacher, value) => {
    setRatings((prevRating) => ({ ...prevRating, [teacher]: parseInt(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(ratings).some((rating) => rating === null)) {
      setResult("Give rating to all the teachers.");
      return;
    }

    const sortedTeachers = Object.entries(ratings).sort(
      ([, a], [, b]) => a - b
    );
    console.log(sortedTeachers);
    setResult(`Teacher of the Year award goes to - ${sortedTeachers[0][0]}`);
  };
  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <h1>Teacher reviwes</h1>
        <label>Names</label>
        <label> 3</label>
        <label> 2</label>
        <label> 1</label>
        <br />
        <label id="first">
          Miss Mary &nbsp;
          <input
            type="radio"
            value="3"
            id="m3"
            name="Miss Mary"
            onChange={(e) => handleRatingChange("Miss Mary", e.target.value)}
          />
          <input
            type="radio"
            value="2"
            id="m2"
             name="Miss Mary"
            onChange={(e) => handleRatingChange("Miss Mary", e.target.value)}
          />
          <input
            type="radio"
            value="1"
            id="m1"
             name="Miss Mary"
            onChange={(e) => handleRatingChange("Miss Mary", e.target.value)}
          />
        </label>{" "}
        <br />
        <label id="first">
          Mr.Vikram &nbsp;
          <input
            type="radio"
            value="3"
            id="m3"
             name="Mr.Vikram"
            onChange={(e) => handleRatingChange("Mr.Vikram", e.target.value)}
          />
          <input
            type="radio"
            value="2"
            id="m2"
            name="Mr.Vikram"
            onChange={(e) => handleRatingChange("Mr.Vikram", e.target.value)}
          />
          <input
            type="radio"
            value="1"
            id="m1"
            name="Mr.Vikram"
            onChange={(e) => handleRatingChange("Mr.Vikram", e.target.value)}
          />
        </label>{" "}
        <br />
        <label id="first">
          RK Kumar &nbsp;
          <input
            type="radio"
            value="3"
            id="m3"
            name="RK Kumar"
            onChange={(e) => handleRatingChange("RK Kumar", e.target.value)}
          />
          <input
            type="radio"
            value="2"
            id="m2"
            name="RK Kumar"
            onChange={(e) => handleRatingChange("RK Kumar", e.target.value)}
          />
          <input
            type="radio"
            value="1"
            id="m1"
              name="RK Kumar"
            onChange={(e) => handleRatingChange("RK Kumar", e.target.value)}
          />
        </label>{" "}
        <br />
        <br />
        <input type="submit" id="submit" value="Submit" />
      </form>
      <div id="result">{result}</div>
    </div>
  );
};

export default Rating;
