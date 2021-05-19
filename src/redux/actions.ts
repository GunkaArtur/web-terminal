import { Dispatch } from "redux";

// region ActionTypes
export enum ActionTypes {
  AddToHistory = "TERMINAL/ADD_TO_HISTORY",
  ClearHistory = "TERMINAL/REMOVE_FROM_HISTORY",
  AddCurrentComand = "TERMINAL/ADD_CURRENT_COMAND",
  RemoveCurrentComand = "TERMINAL/REMOVE_CURRENT_COMAND",
  AddComand = "TERMINAL/ADD_COMAND",
  AddPrevComand = "TERMINAL/ADD_PREV_COMAND",
  SetCommands = "TERMINAL/SET_COMMANDS",
  SetTheme = "APP/SET_THEME",
  SetColor = "APP/SET_COLOR",
  SetFont = "APP/SET_FONT"
}
// endregion

// region AddToHistory
export type AddToHistory = {
  type: ActionTypes.AddToHistory;
  payload: string;
};

export function addToHistory(item: string) {
  return async (dispatch: Dispatch<AddToHistory>) => {
    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/gunkaartur/web-terminal/${item}`
      );
      if (!response.ok) {
        dispatch({ type: ActionTypes.AddToHistory, payload: item });
        dispatch({
          type: ActionTypes.AddToHistory,
          payload: `${item}: command not found `
        });
        return;
      }
      const json = await response.json();
      dispatch({ type: ActionTypes.AddToHistory, payload: item });
      dispatch({ type: ActionTypes.AddToHistory, payload: json.answer });
    } catch (e) {
      console.error(e);
    }
  };
}
// endregion

// region ClearHistory
export type ClearHistory = {
  type: ActionTypes.ClearHistory;
};

export function clearHistory() {
  return {
    type: ActionTypes.ClearHistory
  };
}
// endregion

// region AddCurrentComand
export type AddCurrentComand = {
  type: ActionTypes.AddCurrentComand;
  payload: string;
};

export function addCurrentComand(item: string): AddCurrentComand {
  return {
    type: ActionTypes.AddCurrentComand,
    payload: item
  };
}
// endregion

// region RemoveCurrentComand
export type RemoveCurrentComand = {
  type: ActionTypes.RemoveCurrentComand;
};
export function removeCurrentComand(): RemoveCurrentComand {
  return {
    type: ActionTypes.RemoveCurrentComand
  };
}
// endregion

// region AddComand
export type AddComand = {
  type: ActionTypes.AddComand;
  payload: string;
};
export function addComand(item: string): AddComand {
  return {
    type: ActionTypes.AddComand,
    payload: item
  };
}
// endregion

// region AddPrevComand
export type AddPrevComand = {
  type: ActionTypes.AddPrevComand;
  payload: number;
};
export function addPrevComand(item: number): AddPrevComand {
  return {
    type: ActionTypes.AddPrevComand,
    payload: item
  };
}
// endregion

// region SetCommands
export type SetCommands = {
  type: ActionTypes.SetCommands;
  payload: JSON;
};
export function setCommands() {
  return async (dispatch: Dispatch<SetCommands>) => {
    const response = await fetch(
      "https://my-json-server.typicode.com/gunkaartur/web-terminal/commands"
    );
    const json = await response.json();
    dispatch({ type: ActionTypes.SetCommands, payload: json });
  };
}
// endregion

// region SetTheme
export type SetTheme = {
  type: ActionTypes.SetTheme;
  payload: string;
};

export function setTheme(item: string): SetTheme {
  return {
    type: ActionTypes.SetTheme,
    payload: item
  };
}
// endregion

// region SetColor
export type SetColor = {
  type: ActionTypes.SetColor;
  payload: string;
};

export function setColor(item: string): SetColor {
  return {
    type: ActionTypes.SetColor,
    payload: item
  };
}
// endregion

// region SetFont
export type SetFont = {
  type: ActionTypes.SetFont;
  payload: string;
};
export function setFont(item: string): SetFont {
  return {
    type: ActionTypes.SetFont,
    payload: item
  };
}
// endregion

// region Actions
export type TerminalActions =
  | AddToHistory
  | ClearHistory
  | AddCurrentComand
  | RemoveCurrentComand
  | AddComand
  | AddPrevComand
  | SetCommands;

export type AppActions = SetColor | SetFont | SetTheme;
// endregion
