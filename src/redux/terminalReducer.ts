import {
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY,
  ADD_CURRENT_COMAND,
  REMOVE_CURRENT_COMAND,
  ADD_COMAND,
  ADD_PREV_COMAND,
  SET_COMMANDS
} from "./types";
import {
  AddToHistory,
  SetCommands,
  ClearHistory,
  AddCurrentComand,
  RemoveCurrentComand,
  AddComand,
  AddPrevComand
} from "./actions";

type InitialState = typeof initialState;

const initialState = {
  commandList: [],
  history: [],
  comands: [],
  currentComand: "",
  prevComand: 0
};

type Actions =
  | AddToHistory
  | SetCommands
  | ClearHistory
  | AddCurrentComand
  | RemoveCurrentComand
  | AddComand
  | AddPrevComand;

export function terminalReducer(
  state: InitialState = initialState,
  action: Actions
) {
  switch (action.type) {
    case ADD_TO_HISTORY: {
      return { ...state, history: [...state.history, action.payload] };
    }

    case REMOVE_FROM_HISTORY: {
      return { ...state, history: [] };
    }

    case ADD_CURRENT_COMAND: {
      return { ...state, currentComand: action.payload };
    }

    case REMOVE_CURRENT_COMAND: {
      return { ...state, currentComand: "" };
    }

    case ADD_COMAND: {
      return { ...state, comands: [...state.comands, action.payload] };
    }

    case ADD_PREV_COMAND: {
      return { ...state, prevComand: action.payload };
    }

    case SET_COMMANDS: {
      return { ...state, commandList: action.payload };
    }

    default:
      return state;
  }
}
