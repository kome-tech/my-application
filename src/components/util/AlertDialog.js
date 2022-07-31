import React, { useEffect, useState, useReducer, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import TodoContext from "../../contexts/TodoContext";

import { DIALOG_AGREEMENT, DIALOG_DISAGREEMENT } from "../../actions/index.js";

export default function AlertDialog() {
  // const [state, dispatch] = useReducer(alert_dialog_reducer, { open: false, isConfirmed: false });
  const { state, dispatch } = useContext(TodoContext);
  // const [open, setOpen] = useState(state.alertDialog.open);
  const open = state.alertDialog.open;

  const handleClickOpen = () => {
    dispatch({ type: DIALOG_AGREEMENT});
  };

  const handleClose = () => {
    dispatch({ type: DIALOG_DISAGREEMENT});
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete it?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This task will be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">NO</Button>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
