import { Dispatch } from "redux";

// region ActionTypes
export enum ActionTypes {
  AddToHistory = "TERMINAL/ADD_TO_HISTORY",
  ClearHistory = "TERMINAL/REMOVE_FROM_HISTORY",
  AddCurrentCommand = "TERMINAL/ADD_CURRENT_COMMAND",
  RemoveCurrentCommand = "TERMINAL/REMOVE_CURRENT_COMMAND",
  AddCommand = "TERMINAL/ADD_COMMAND",
  AddPrevCommand = "TERMINAL/ADD_PREV_COMMAND",
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

// region AddCurrentCommand
export type AddCurrentComand = {
  type: ActionTypes.AddCurrentCommand;
  payload: string;
};

export function addCurrentCommand(item: string): AddCurrentComand {
  return {
    type: ActionTypes.AddCurrentCommand,
    payload: item
  };
}
// endregion

// region RemoveCurrentCommand
export type RemoveCurrentCommand = {
  type: ActionTypes.RemoveCurrentCommand;
};
export function removeCurrentCommand(): RemoveCurrentCommand {
  return {
    type: ActionTypes.RemoveCurrentCommand
  };
}
// endregion

// region AddCommand
export type AddCommand = {
  type: ActionTypes.AddCommand;
  payload: string;
};
export function addCommand(item: string): AddCommand {
  return {
    type: ActionTypes.AddCommand,
    payload: item
  };
}
// endregion

// region AddPrevCommand
export type AddPrevCommand = {
  type: ActionTypes.AddPrevCommand;
  payload: number;
};
export function addPrevCommand(item: number): AddPrevCommand {
  return {
    type: ActionTypes.AddPrevCommand,
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
  | RemoveCurrentCommand
  | AddCommand
  | AddPrevCommand
  | SetCommands;

export type AppActions = SetColor | SetFont | SetTheme;
// endregion
