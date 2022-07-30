import React, { useEffect, useState, useReducer } from "react";

import todoReducer from "../reducers/todo_reducer";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const initialTodo = {
  task: "",
  content: "",
  priority: "",
};

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <>
      <CreateTasks dispatch={dispatch} todoList={todos} />
      <TodoList todos={todos} />
    </>
  );
};

const TodoList = (props) => {
  const todos = props.todos;
  return (
    <div>
      <h4>TODO List</h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="center">Content</TableCell>
              <TableCell align="center">priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{todo.task}</TableCell>
                  <TableCell align="center">{todo.content}</TableCell>
                  <TableCell align="center">{todo.priority}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const CreateTasks = (props) => {
  const [todo, setTodo] = useState(initialTodo);
  const task = todo.task;
  const content = todo.content;
  const priority = todo.priority;

  const addTask = () => {
    const action = {
      type: "CREATE_TASK",
      task,
      content,
      priority,
    };
    props.dispatch(action);
  };

  return (
    <div>
      <h4>Create Task</h4>
      <div>
        <TextField
          label="task"
          variant="outlined"
          value={task}
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="content"
          variant="outlined"
          value={content}
          onChange={(e) => setTodo({ ...todo, content: e.target.value })}
        />
      </div>
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="select-priority">Priority</InputLabel>
          <Select
            labelId="select-priority"
            id="select-priority"
            value={priority}
            label="Priority"
            onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
          >
            <MenuItem value={"High"}>High</MenuItem>
            <MenuItem value={"Middle"}>Middle</MenuItem>
            <MenuItem value={"Low"}>Low</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Button variant="contained" onClick={() => addTask()}>
          ADD Task
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setTodo(initialTodo)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Todo;
