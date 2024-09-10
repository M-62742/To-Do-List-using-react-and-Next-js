"use client";

import React, { useState } from "react";

const Container = () => {
  const [title, setTitle] = useState("");
  const [main, setMain] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setMain([...main, { title }]);
      setTitle("");
    }
  };

  const deleteHandler = (index) => {
    setMain(main.filter((_, i) => i !== index));
  };

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
        <ul>
          {main.length === 0 ? (
            <h2>No Task Available</h2>
          ) : (
            main.map((t, i) => (
              <li key={i} className="flex items-center justify-between">
                <div>
                  <h3>{t.title}</h3>
                </div>
                <button onClick={() => deleteHandler(i)}>Delete</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default Container;
