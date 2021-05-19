import { combineReducers } from "redux";
import { terminalReducer } from "./terminalReducer";
import { appReducer } from "./appReducer";

export const Reducer = combineReducers({
  terminal: terminalReducer,
  app: appReducer
});
