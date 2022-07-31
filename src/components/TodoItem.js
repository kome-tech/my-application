import React, { useContext } from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { DELETE_TASK } from "../actions/todo_action.js";

import TodoContext from "../contexts/TodoContext";

const TodoItem = ({ item }) => {
  const { dispatch } = useContext(TodoContext);
  const handleClickDelete = (id) => {
    const action = {
      type: DELETE_TASK,
      id,
    };
    dispatch(action);
  };
  return (
    <TableRow>
      <TableCell>{item.task}</TableCell>
      <TableCell align="center">{item.content}</TableCell>
      <TableCell align="center">{item.priority}</TableCell>
      <TableCell align="center">
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => handleClickDelete(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TodoItem;
