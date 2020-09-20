import { SET_COLOR, SET_THEME, SET_FONT } from "./types";

const initialState = {
  theme: "ubuntu",
  font: "courier",
  color: "#aaaaaa",
};

export const appReducer = (state = initialState, action) => {
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
