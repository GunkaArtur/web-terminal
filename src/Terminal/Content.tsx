import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import * as Actions from "../redux/actions";
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
    dispatch(Actions.setCommands());
  }, [dispatch]);

  const refInput = React.createRef<HTMLInputElement>();

  const handleKeyDown = async ({
    key,
    target
  }: React.KeyboardEvent<HTMLInputElement>) => {
    switch (key) {
      case "Enter": {
        (target as HTMLInputElement).value &&
          dispatch(Actions.addComand((target as HTMLInputElement).value));

        (target as HTMLInputElement).value === "clear"
          ? dispatch(Actions.clearHistory())
          : dispatch(Actions.addToHistory(currentComand));

        dispatch(Actions.removeCurrentComand());
        dispatch(Actions.addPrevComand(comands.length + 1));
        return;
      }
      case "ArrowUp": {
        if (prevComand === 0) return;
        else {
          dispatch(Actions.addCurrentComand(comands[prevComand - 1]));
          prevComand !== 0 && dispatch(Actions.addPrevComand(prevComand - 1));
        }
        return;
      }
      case "ArrowDown": {
        if (prevComand === comands.length || prevComand === comands.length - 1)
          return;
        else {
          dispatch(Actions.addCurrentComand(comands[prevComand + 1]));
          prevComand < comands.length &&
            dispatch(Actions.addPrevComand(prevComand + 1));
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
        onChange={e => dispatch(Actions.addCurrentComand(e.target.value))}
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
