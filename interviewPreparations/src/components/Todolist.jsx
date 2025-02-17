import React, { useState } from "react";

const Todolist = () => {
  const [userInput, setUserInput] = useState("");
  const [lists, setLists] = useState([]);

  const addTasks = () => {
    const newList = {
      id: crypto.randomUUID(),
      value: userInput,
      isCompleted: false,
    };
    setLists([...lists, newList]);
    setUserInput("");
  };

  const completeTask = (id) => {
    // console.log(id);
    const updateList = lists.map((list) => {
      if (list.id === id) {
        return { ...list, isCompleted: !list.isCompleted };
      }
      return list;
    });
    setLists(updateList);
  };

  const deleteTask = (id) => {
    const newUpdatedList = lists.filter((list) => list.id !== id);
    setLists(newUpdatedList);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={addTasks}>add</button>
      </div>
      <div>
        {lists.length > 0 &&
          lists.map((list) => (
            <li
              key={list.id}
              style={{ textDecoration: list.isCompleted ? "line-through" : "" }}
            >
              {list.value}
              <button onClick={() => completeTask(list.id)}>completed</button>
              <button onClick={() => deleteTask(list.id)}>delete</button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default Todolist;
