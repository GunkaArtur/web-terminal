import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

const devTools =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : null;

export const store = createStore(
  Reducer,
  compose(applyMiddleware(thunk), devTools)
);
