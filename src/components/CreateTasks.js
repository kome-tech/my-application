import React, { useEffect, useState, useContext } from "react";

import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

import {
  CREATE_TASK,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOG,
} from "../actions";

import TodoContext from "../contexts/TodoContext";

import { timeCurrentIso8601 } from "../util/util";

const initialTodo = {
  task: "",
  content: "",
  priority: "",
};

const CreateTasks = () => {
  const { dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState(initialTodo);
  const task = todo.task;
  const content = todo.content;
  const priority = todo.priority;

  const unCreatable = task === "" || content === "" || priority === "";

  const addTask = () => {
    dispatch({
      type: CREATE_TASK,
      task,
      content,
      priority,
    });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "ADD TODO",
      operationAt: timeCurrentIso8601(),
    });
    setTodo(initialTodo);
  };

  return (
    <div>
      <h4>Create Task</h4>
      <Box sx={{ m: 2 }}>
        <TextField
          label="task"
          variant="outlined"
          value={task}
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
        />
      </Box>
      <Box sx={{ m: 2 }}>
        <TextField
          label="content"
          variant="outlined"
          value={content}
          onChange={(e) => setTodo({ ...todo, content: e.target.value })}
        />
      </Box>
      <Box sx={{ m: 2 }}>
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
      </Box>
      <Box sx={{ m: 2 }}>
        <Button
          variant="contained"
          onClick={() => addTask()}
          disabled={unCreatable}
          sx={{ m: 2 }}
        >
          ADD Task
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setTodo(initialTodo)}
          sx={{ m: 2 }}
        >
          Reset
        </Button>
      </Box>
    </div>
  );
};

export default CreateTasks;
