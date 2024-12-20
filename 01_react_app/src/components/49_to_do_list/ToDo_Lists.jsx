import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToDo_Lists = () => {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    const newItems = {
      id: crypto.randomUUID(),
      value: userInput,
      isCompleted: false,
    };
    setItems((prev) => [...prev, newItems]);
    setUserInput("");
  };
  //   console.log(items);
  const taskComplete = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const deletTask = (id) => {
    const newtasks = items.filter((item) => item.id !== id);
    setItems(newtasks);
  };
  
  return (
    <div id="main">
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={addItems}>add</button>
      </div>
      <div>
        <h1>Lists</h1>
        <div>
          {items.length > 0 &&
            items.map((item) => (
              <li
                style={{
                  textDecorationColor: item.isCompleted
                    ? "line-through"
                    : "none",
                }}
                key={item.id}
              >
                {item.value}
                <button onClick={() => taskComplete(item.id)}>completed</button>
                <button onClick={() => deletTask(item.id)}>delete</button>
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo_Lists;
