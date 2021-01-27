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
  setCommands
} from "../redux/actions";
import { State } from "../types/state";

type Props = {
  history: Array<string>;
  comands: Array<string>;
  currentComand: string;
  prevComand: number;
  color: string;
};

const Content: React.FC<Props | undefined> = ({
  history,
  comands,
  currentComand,
  prevComand,
  color
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCommands());
  }, [dispatch]);

  const refInput = React.createRef<HTMLInputElement>();

  const handleKeyDown = async ({
    key,
    target
  }: React.KeyboardEvent<HTMLInputElement>) => {
    switch (key) {
      case "Enter": {
        (target as HTMLInputElement).value &&
          dispatch(addComand((target as HTMLInputElement).value));

        (target as HTMLInputElement).value === "clear"
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
      default:
        return;
    }
  };

  const handleFocus = () => {
    refInput?.current?.focus();
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
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyDown(e)
        }
        value={currentComand}
        ref={refInput}
        style={{ color: color }}
        onChange={e => dispatch(addCurrentComand(e.target.value))}
      />
    </div>
  );
};

const mapStateToProps = ({ terminal, app }: State) => {
  return {
    history: terminal.history,
    comands: terminal.comands,
    currentComand: terminal.currentComand,
    prevComand: terminal.prevComand,
    color: app.color
  };
};

export default connect(mapStateToProps, null)(Content);
