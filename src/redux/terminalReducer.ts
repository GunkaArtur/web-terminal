import { ActionTypes, TerminalActions as Actions } from "./actions";

type InitialState = typeof initialState;

const initialState = {
  commandList: [],
  history: [],
  comands: [],
  currentComand: "",
  prevComand: 0
};

export function terminalReducer(
  state: InitialState = initialState,
  action: Actions
) {
  switch (action.type) {
    case ActionTypes.AddToHistory: {
      return { ...state, history: [...state.history, action.payload] };
    }

    case ActionTypes.ClearHistory: {
      return { ...state, history: [] };
    }

    case ActionTypes.AddCurrentComand: {
      return { ...state, currentComand: action.payload };
    }

    case ActionTypes.RemoveCurrentComand: {
      return { ...state, currentComand: "" };
    }

    case ActionTypes.AddComand: {
      return { ...state, comands: [...state.comands, action.payload] };
    }

    case ActionTypes.AddPrevComand: {
      return { ...state, prevComand: action.payload };
    }

    case ActionTypes.SetCommands: {
      return { ...state, commandList: action.payload };
    }

    default:
      return state;
  }
}
