export const ADD_TO_HISTORY = "ADD_TO_HISTORY";
export const REMOVE_FROM_HISTORY = "REMOVE_FROM_HISTORY";

export const ADD_CURRENT_COMAND = "ADD_CURRENT_COMAND";
export const REMOVE_CURRENT_COMAND = "REMOVE_CURRENT_COMAND";

export const ADD_COMAND = "ADD_COMAND";

export const ADD_PREV_COMAND = "ADD_PREV_COMAND";

export const SET_COMMANDS = "SET_COMMANDS";

export function addToHistory(item) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/gunkaartur/web-terminal/${item}`
      );
      if (!response.ok) {
        dispatch({ type: ADD_TO_HISTORY, payload: item });
        dispatch({
          type: ADD_TO_HISTORY,
          payload: `${item}: command not found `,
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
export function clearHistory() {
  return {
    type: REMOVE_FROM_HISTORY,
  };
}

export function addCurrentComand(item) {
  return {
    type: ADD_CURRENT_COMAND,
    payload: item,
  };
}
export function removeCurrentComand() {
  return {
    type: REMOVE_CURRENT_COMAND,
  };
}
export function addComand(item) {
  return {
    type: ADD_COMAND,
    payload: item,
  };
}
export function addPrevComand(item) {
  return {
    type: ADD_PREV_COMAND,
    payload: item,
  };
}
export function setCommands() {
  return async (dispatch) => {
    const response = await fetch(
      "https://my-json-server.typicode.com/gunkaartur/web-terminal/commands"
    );
    const json = await response.json();
    dispatch({ type: SET_COMMANDS, payload: json });
  };
}
