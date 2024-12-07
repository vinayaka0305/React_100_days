import React, { useState, useEffect } from "react";
import "./keyboard.css";
import axios from "axios";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const Keyboard = () => {
  const [input, setInput] = useState(""); // State for user input
  const [quote, setQuote] = useState(""); // State for fetched quote
  const [loading, setLoading] = useState(true);

  const handleClick = (e) => {
    setInput(input + e.target.value); // Append the clicked key to input
  };

  useEffect(() => {
    // if (input == "to") {
      fetchData(); // Fetch a random quote when the component mounts
    
  }, [input]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      ); // Await the API call
      console.log(response.data)
      setTimeout(()=>{
        setLoading(false);
      },200)
    } catch (error) {
      console.error(error); // Log any errors
    }
  };


  return (
    <div className="keyboard">
      <div className="quote">{quote}</div> {/* Display the fetched quote */}
      <div className="preview">{input}</div> {/* Display the user's input */}
      <div>
        {keys.map((key, index) => (
          <button
            key={index} // Add a unique key
            id={key === " " ? `key-space` : `key-${key}`}
            value={key}
            onClick={handleClick}
          >
            {key === " " ? "Space" : key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
