import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
  addToHistory,
  clearHistory,
  addCurrentComand,
  removeCurrentComand,
  addComand,
  addPrevComand,
  setCommands,
} from "../redux/actions";

const Content = ({ history, comands, currentComand, prevComand }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCommands());
  }, []);

  const refInput = React.createRef();

  const handleKeyDown = async ({ key, target }) => {
    switch (key) {
      case "Enter": {
        target.value && dispatch(addComand(target.value));

        target.value === "clear"
          ? dispatch(clearHistory())
          : dispatch(addToHistory(currentComand));

        dispatch(removeCurrentComand());
        dispatch(addPrevComand(comands.length + 1));
        return;
      }
      case "ArrowUp": {
        if (prevComand === 0) return;
        else {
          dispatch(addCurrentComand(comands[prevComand - 1]));
          prevComand !== 0 && dispatch(addPrevComand(prevComand - 1));
        }
        return;
      }
      case "ArrowDown": {
        if (prevComand === comands.length || prevComand === comands.length - 1)
          return;
        else {
          dispatch(addCurrentComand(comands[prevComand + 1]));
          prevComand < comands.length &&
            dispatch(addPrevComand(prevComand + 1));
        }
        return;
      }
    }
  };

  const handleFocus = () => {
    refInput.current.focus();
  };

  return (
    <div className="terminal--content" onClick={handleFocus}>
      <ul className="terminal--history">
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <span>user@host:/$ </span>

      <input
        className="terminal--input"
        type="text"
        onKeyDown={(e) => handleKeyDown(e)}
        value={currentComand}
        ref={refInput}
        onChange={(e) => dispatch(addCurrentComand(e.target.value))}
      />
    </div>
  );
};

const mapStateToProps = ({ terminal }) => {
  return {
    history: terminal.history,
    comands: terminal.comands,
    currentComand: terminal.currentComand,
    prevComand: terminal.prevComand,
  };
};

export default connect(mapStateToProps, null)(Content);
