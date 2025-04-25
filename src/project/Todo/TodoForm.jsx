import React, { useState } from "react";

const TodoForm = ({ onAddToDo }) => {
  const [inputVal, setInputVal] = useState({});

  const handleInputChange = (value) =>{
    setInputVal({id:value , content:value , checked:false});
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddToDo(inputVal);
    setInputVal({id:"" , content:"" , checked:false});
  };

  return (
    <>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              onChange={(e) => handleInputChange(e.target.value)}
              value={inputVal.content}
              placeholder="Enter item"
              autoFocus
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              {" "}
              Add task
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
