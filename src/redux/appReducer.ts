import { SET_COLOR, SET_THEME, SET_FONT } from "./types";
import {SetColor, SetFont, SetTheme} from "./actions"

type InitialState = {
  theme: string,
  font: string,
  color: string
}

const initialState:InitialState = {
  theme: "ubuntu",
  font: "courier",
  color: "#aaaaaa",
};

export const appReducer = (state:InitialState = initialState, action: SetFont | SetTheme | SetColor) => {
  switch (action.type) {
    case SET_COLOR: {
      return { ...state, color: action.payload };
    }
    case SET_THEME: {
      return { ...state, theme: action.payload };
    }
    case SET_FONT: {
      return { ...state, font: action.payload };
    }
    default:
      return state;
  }
};
