import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

export const store = createStore(Reducer, compose(applyMiddleware(thunk)));
