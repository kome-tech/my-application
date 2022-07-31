import { combineReducers } from "redux";
import todo from "./todo";
import alert_dialog from "./alertDialog";

export default combineReducers({ todo, alert_dialog });
