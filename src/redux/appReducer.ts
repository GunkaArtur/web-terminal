import {ActionTypes, AppActions as Actions} from "./actions"

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

export const appReducer = (state:InitialState = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SetColor: {
      return { ...state, color: action.payload };
    }
    case ActionTypes.SetTheme: {
      return { ...state, theme: action.payload };
    }
    case ActionTypes.SetFont: {
      return { ...state, font: action.payload };
    }
    default:
      return state;
  }
};
