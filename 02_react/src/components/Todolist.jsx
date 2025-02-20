import React, { useState } from "react";

const Todolist = () => {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    const newItems = {
      id: crypto.randomUUID(),
      value: userInput,
      isCompleted: false,
    };
    setItems([...items, newItems]);
    setUserInput("");
  };
  // console.log(items);

  const completedTask = (id) => {
    const updateItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    console.log(updateItems);
    setItems(updateItems);
  };

  const deleteTask = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>todo list</h2>
      <input
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <button onClick={addItems}>add</button>
      <div>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <li
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "none",
                }}
              >
                {item.value}
                <button onClick={() => completedTask(item.id)}>
                  completed
                </button>
                <button onClick={() => deleteTask(item.id)}>delete</button>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default Todolist;
