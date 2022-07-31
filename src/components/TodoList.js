import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { DELETE_TASK } from "../actions/todo_action.js";
const TodoList = ({ dispatch, todoList }) => {
  const todos = todoList;

  const handleClickDelete = (id) => {
    const action = {
      type: DELETE_TASK,
      id,
    };
    dispatch(action);
  };
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
              return (
                <TableRow key={index}>
                  <TableCell>{todo.task}</TableCell>
                  <TableCell align="center">{todo.content}</TableCell>
                  <TableCell align="center">{todo.priority}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => handleClickDelete(todo.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TodoList;
