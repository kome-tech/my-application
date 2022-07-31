import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { CREATE_TASK} from "../actions/todo_action";

const initialTodo = {
  task: "",
  content: "",
  priority: "",
};

const CreateTasks = ({ dispatch }) => {
  const [todo, setTodo] = useState(initialTodo);
  const task = todo.task;
  const content = todo.content;
  const priority = todo.priority;

  const unCreatable = task === "" || content === "" || priority === "";

  const addTask = () => {
    const action = {
      type: CREATE_TASK,
      task,
      content,
      priority,
    };
    dispatch(action);
    setTodo(initialTodo);
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
        <Button
          variant="contained"
          onClick={() => addTask()}
          disabled={unCreatable}
        >
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

export default CreateTasks;
