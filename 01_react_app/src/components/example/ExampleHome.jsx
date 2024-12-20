import React, { useState } from "react";

const ExampleHome = () => {
  const [userInput, setUserInput] = useState("");
  const [lists, setLists] = useState([]);

  const addItem = () => {
    if(!userInput){
      return alert('please enter something')
    }
    const newList = {
      id: crypto.randomUUID(),
      value: userInput,
      isCompleted: false,
    };
    setLists((prev) => [...prev, newList]);
    setUserInput('')
  };

  const taskComplete = (id) => {
    const completedTasks = lists.map((list) => {
      if (list.id === id) {
        return { ...list, isCompleted: !list.isCompleted };
      }
      return list;
    });
    // console.log(completedTasks);
    setLists(completedTasks);
  };

  const deleteTask = (id) => {
    const updateList = lists.filter((list) => list.id !== id);
    setLists(updateList);
  };

  return (
    <div id="main">
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={addItem}>add</button>
      </div>
      <div>
        {lists.length > 0 &&
          lists.map((list) => (
            <li
              style={{
                textDecoration: list.isCompleted ? "line-through" : "none",
              }}
            >
              {list.value}
              <button onClick={() => taskComplete(list.id)}>completed</button>
              <button onClick={() => deleteTask(list.id)}>delete</button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default ExampleHome;
