import React, { act, useReducer, useState } from "react";

const initialState = [
  { id: 1, name: "Learn React", status: "todo" },
  { id: 2, name: "Learn Redux", status: "todo" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), name: action.payload, status: "todo" },
      ];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, status: task.status === "todo" ? "done" : "todo" }
          : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const CompleteTheTask = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newtask, setNewTasks] = useState("");

  const addTask = () => {
    if (newtask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newtask });
      setNewTasks("");
    }
  };

  const toggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };
  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  return (
    <div>
      <input
        type="text"
        value={newtask}
        onChange={(e) => setNewTasks(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {state.map((task) => (
          <li key={task.id}>
            <h2>{task.name}</h2>
            <p>{task.status}</p>
            <button onClick={() => toggleTask(task.id)}>
              {task.status === "todo" ? "done" : "todo"}
            </button>
            <button onClick={() => deleteTask(task.id)}>deleteTask</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompleteTheTask;
