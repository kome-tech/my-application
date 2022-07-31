import React, { useEffect, useState, useReducer } from "react";

import reducers from "../reducers/index";

import TodoContext from "../contexts/TodoContext";

import CreateTasks from "./CreateTasks";
import TodoList from "./TodoList";
import OperationLogList from "./OperationLogList";

const Todo = () => {
  const initialState = {
    todo: [],
    alertDialog: { open: false, isConfirmed: false },
    operationLogs: [],
  }
  const [state, dispatch] = useReducer(reducers, initialState);
  console.log(state);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <CreateTasks />
      <TodoList />
      <OperationLogList />
    </TodoContext.Provider>
  );
};

export default Todo;
