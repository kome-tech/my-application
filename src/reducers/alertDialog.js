const alert_dialog_reducer = (
  state = { open: false, isConfirmed: false },
  action
) => {
  switch (action.type) {
    case "DIALOG_OPNE":
      return { ...state, open: true };
    case "DIALOG_AGREEMENT":
      return { open: false, isConfirmed: true };
    case "DIALOG_DISAGREEMENT":
      return { open: false, isConfirmed: false };
    default:
      return state;
  }
};

export default alert_dialog_reducer;
