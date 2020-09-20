import { combineReducers } from "redux";
import { terminalReducer } from "./terminalReducer";

export const Reducer = combineReducers({
  terminal: terminalReducer,
});
