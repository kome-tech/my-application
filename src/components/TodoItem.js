import React, { useContext } from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { DELETE_TASK, DELETE_OPERATION_LOG, DIALOG_OPNE } from "../actions/index.js";

import TodoContext from "../contexts/TodoContext";

import { timeCurrentIso8601 } from "../util/util";

const TodoItem = ({ item }) => {
  const { state, dispatch } = useContext(TodoContext);
  const handleClickDelete = (id) => {
    dispatch({
      type: DELETE_TASK,
      id,
    });
    dispatch({
      type: DELETE_OPERATION_LOG,
      description: "DELETE TODO",
      operationAt: timeCurrentIso8601(),
    });
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
