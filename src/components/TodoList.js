import React, { useContext } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TodoItem from "./TodoItem.js";

import TodoContext from "../contexts/TodoContext";

const TodoList = () => {
  const { todoList } = useContext(TodoContext);
  const todos = todoList;

  return (
    <div>
      <h4>TODO List</h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="center">Content</TableCell>
              <TableCell align="center">Priority</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => {
              return <TodoItem key={index} item={todo} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TodoList;
