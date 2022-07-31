import React, { useEffect, useState, useReducer } from "react";

import todoReducer from "../reducers/todo_reducer";

import TodoContext from "../contexts/TodoContext";

import AlertDialog from "./util/AlertDialog";
import CreateTasks from "./CreateTasks";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoList, dispatch] = useReducer(todoReducer, []);
  //   const [state, dispatch1] = useReducer(alert_dialog_reducer, { open: false, isConfirmed: false });

  return (
    <TodoContext.Provider value={{ todoList, dispatch }}>
      <AlertDialog />
      <CreateTasks />
      <TodoList />
    </TodoContext.Provider>
  );
};

export default Todo;
