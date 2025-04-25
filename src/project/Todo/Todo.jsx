import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";


const Todo = () => {
  const [task, setTask] = useState(()=>getLocalStorageTodoData());

  const handleFormSubmit = (inputVal) => {
    const { id, content, checked } = inputVal;
    //Null value store nay karva dese
    if (!content) return;

    //Reapeated value check karshe
    // if (task.includes(inputVal)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    //Store thay jay pachi input ma thi remove kari dese
    // setTask((prevTask) => [...prevTask, inputVal]);
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  }; 

  // add data to localStorage

  setLocalStorageTodoData(task);

  //Delete
  const handleDelete = (curTask) => {
    console.log(task);
    console.log(curTask); // je element delete karvu hoy ae console ma dekhase
    const updateTask = task.filter((value) => value.content !== curTask);
    setTask(updateTask); //stateupdate thayu nava array sathe ane todo compoenet pachu rerendered thayu atle apdne thayu k delete thay gayu
  };
  const handleClear = () => {
    setTask([]);
  };

  const handleChecked = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked }; //true hoy to false and false hoy to true kare
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };
  return (
    <div>
      <section className="todo-container">
        <header>
          <h1>To do list</h1>
          <TodoDate />
        </header>

        <TodoForm onAddToDo={handleFormSubmit} />

        <section className="unOrdList">
          <ul>
            {task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  deletefunc={handleDelete}
                  checkfunc={handleChecked}
                />
              );
            })}
          </ul>
        </section>
        <section className="clearall" onClick={handleClear}>
          <button>ClearAll</button>
        </section>
      </section>
    </div>
  );
};

export default Todo;
