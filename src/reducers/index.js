import { combineReducers } from "redux";
import todo from "./todo";
import alertDialog from "./alertDialog";
import operationLogs from "./operationLogs";

export default combineReducers({ todo, alertDialog, operationLogs });
