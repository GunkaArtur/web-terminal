import {
  ADD_COMAND,
  ADD_TO_HISTORY,
  ADD_CURRENT_COMAND,
  ADD_PREV_COMAND,
  REMOVE_FROM_HISTORY,
  REMOVE_CURRENT_COMAND,
  SET_COLOR,
  SET_COMMANDS,
  SET_FONT,
  SET_THEME
} from "./types";
import { Dispatch } from "redux";

export type AddToHistory = {
  type: typeof ADD_TO_HISTORY;
  payload: string;
};
export function addToHistory(item: string) {
  return async (dispatch: Dispatch<AddToHistory>) => {
    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/gunkaartur/web-terminal/${item}`
      );
      if (!response.ok) {
        dispatch({ type: ADD_TO_HISTORY, payload: item });
        dispatch({
          type: ADD_TO_HISTORY,
          payload: `${item}: command not found `
        });
        return;
      }
      const json = await response.json();
      dispatch({ type: ADD_TO_HISTORY, payload: item });
      dispatch({ type: ADD_TO_HISTORY, payload: json.answer });
    } catch (e) {
      console.error(e);
    }
  };
}

export type ClearHistory = {
  type: typeof REMOVE_FROM_HISTORY;
};

export function clearHistory() {
  return {
    type: REMOVE_FROM_HISTORY
  };
}

export type AddCurrentComand = {
  type: typeof ADD_CURRENT_COMAND;
  payload: string;
};

export function addCurrentComand(item: string): AddCurrentComand {
  return {
    type: ADD_CURRENT_COMAND,
    payload: item
  };
}
export type RemoveCurrentComand = {
  type: typeof REMOVE_CURRENT_COMAND;
};
export function removeCurrentComand(): RemoveCurrentComand {
  return {
    type: REMOVE_CURRENT_COMAND
  };
}
export type AddComand = {
  type: typeof ADD_COMAND;
  payload: string;
};
export function addComand(item: string): AddComand {
  return {
    type: ADD_COMAND,
    payload: item
  };
}
export type AddPrevComand = {
  type: typeof ADD_PREV_COMAND;
  payload: number;
};
export function addPrevComand(item: number): AddPrevComand {
  return {
    type: ADD_PREV_COMAND,
    payload: item
  };
}
export type SetCommands = {
  type: typeof SET_COMMANDS;
  payload: JSON;
};
export function setCommands() {
  return async (dispatch: Dispatch<SetCommands>) => {
    const response = await fetch(
      "https://my-json-server.typicode.com/gunkaartur/web-terminal/commands"
    );
    const json = await response.json();
    dispatch({ type: SET_COMMANDS, payload: json });
  };
}

export type SetTheme = {
  type: typeof SET_THEME;
  payload: string;
};

export function setTheme(item: string): SetTheme {
  return {
    type: SET_THEME,
    payload: item
  };
}

export type SetColor = {
  type: typeof SET_COLOR;
  payload: string;
};

export function setColor(item: string): SetColor {
  return {
    type: SET_COLOR,
    payload: item
  };
}
export type SetFont = {
  type: typeof SET_FONT;
  payload: string;
};
export function setFont(item: string): SetFont {
  return {
    type: SET_FONT,
    payload: item
  };
}
