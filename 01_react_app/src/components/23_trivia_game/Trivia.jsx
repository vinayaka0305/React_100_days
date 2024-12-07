import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./game.css";
import { ThemeContext } from "../../ThemeProvider/Themeprovider";

const Trivia = () => {
  const name = useContext(ThemeContext);
  console.log(name);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [userAns, setUserAns] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://opentdb.com/api.php?amount=1");
      const data = await response.json();
      console.log(data);
      if (data.response_code == 0) {
        setQuestion(data.results[0].question);
        setAnswer(data.results[0].correct_answer);
        setUserAns("");
        setResult("");
        setLoading(false);
      } else {
        fetchData();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = () => {
    if (userAns.toLowerCase() === answer.toLowerCase()) {
      setResult("Correct!");
    } else {
      setResult(`incorrect. The right answer is ${answer}`);
    }
    setUserAns("");
    setTimeout(() => {
      fetchData();
    }, 2000);
  };

  return (
    <div id="main">
      <h1>Trivia game {name}</h1>
      {loading ? (
        <p className="question-para">Loading...</p>
      ) : (
        <p className="question-para">Question: {question}</p>
      )}
      <input
        type="text"
        className="answer-input-field"
        value={userAns}
        onChange={(e) => setUserAns(e.target.value)}
      />
      <button onClick={handleSubmit} className="submit-btn">
        Submit
      </button>
      <p className="result-para">{result}</p>
    </div>
  );
};

export default Trivia;
