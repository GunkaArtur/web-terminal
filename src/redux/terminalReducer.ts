import { ActionTypes, TerminalActions as Actions } from "./actions";

type InitialState = typeof initialState;

const initialState = {
  commandList: [],
  history: [],
  commands: [],
  currentCommand: "",
  prevCommand: 0
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

    case ActionTypes.AddCurrentCommand: {
      return { ...state, currentCommand: action.payload };
    }

    case ActionTypes.RemoveCurrentCommand: {
      return { ...state, currentCommand: "" };
    }

    case ActionTypes.AddCommand: {
      return { ...state, commands: [...state.commands, action.payload] };
    }

    case ActionTypes.AddPrevCommand: {
      return { ...state, prevCommand: action.payload };
    }

    case ActionTypes.SetCommands: {
      return { ...state, commandList: action.payload };
    }

    default:
      return state;
  }
}
