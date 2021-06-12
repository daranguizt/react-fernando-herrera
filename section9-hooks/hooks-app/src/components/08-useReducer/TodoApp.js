import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    //localstorage solo guarda strings
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = {
      type: "toggle",
      payload: id,
    };

    dispatch(action);
  };

  const handleAddTodo = (newTodo) => {
    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
  }

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            todos={todos}
            key="todos"
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo}/>
        </div>
      </div>
    </div>
  );
};
