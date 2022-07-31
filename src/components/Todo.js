import React, { useEffect, useState, useReducer } from "react";

import todoReducer from "../reducers/todo_reducer";

import AlertDialog from "./util/AlertDialog";
import CreateTasks from "./CreateTasks";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  //   const [state, dispatch1] = useReducer(alert_dialog_reducer, { open: false, isConfirmed: false });

  return (
    <>
      <AlertDialog />
      <CreateTasks dispatch={dispatch} />
      <TodoList dispatch={dispatch} todoList={todos} />
    </>
  );
};

export default Todo;
