"use client";

import React, { useState } from "react";

const Container = () => {
  const [title, setTitle] = useState("");

  const [main, setmain] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmain([...main, { title }]);
    console.log(title);
    console.log(main);
    setTitle("");
  };
  const deleteHandler = (i) => {
    let copytask = [...main];
    copytask.splice(i, 1);
    setmain(copytask);
  };
  let renderTask = <h2>No Task Available</h2>;
  if (main.length > 0) {
    renderTask = main.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div>
            <h3>{t.title}</h3>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <div className="todo-container">
        <form onSubmit={submitHandler}>
          <div className="todo-item">
            <input
              type="text"
              className="input"
              id="task2"
              placeholder="Enter here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button type="submit" className="todo-button">
            Add Task
          </button>
        </form>
      </div>
      <div className="bg-zinc">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Container;
