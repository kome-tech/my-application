import { combineReducers } from "redux";
import todo from "./modules/todo";
import alertDialog from "./modules/alertDialog";
import operationLogs from "./modules/operationLogs";

export default combineReducers({ todo, alertDialog, operationLogs });
