import React, { useEffect, useState, useReducer } from "react";

import reducers from "../reducers/index";

import TodoContext from "../contexts/TodoContext";

import AlertDialog from "./util/AlertDialog";
import CreateTasks from "./CreateTasks";
import TodoList from "./TodoList";

const Todo = () => {
  const initialState = {
    todo: [],
  }
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <AlertDialog />
      <CreateTasks />
      <TodoList />
    </TodoContext.Provider>
  );
};

export default Todo;
