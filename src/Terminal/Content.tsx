import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import * as Actions from "../redux/actions";
import { State } from "../types/state";

type Props = {
  history: Array<string>;
  commands: Array<string>;
  currentCommand: string;
  prevCommand: number;
  color: string;
};

const Content: React.FC<Props | undefined> = ({
  history,
  commands,
  currentCommand,
  prevCommand,
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
          dispatch(Actions.addCommand((target as HTMLInputElement).value));

        (target as HTMLInputElement).value === "clear"
          ? dispatch(Actions.clearHistory())
          : dispatch(Actions.addToHistory(currentCommand));

        dispatch(Actions.removeCurrentCommand());
        dispatch(Actions.addPrevCommand(commands.length + 1));
        return;
      }
      case "ArrowUp": {
        if (prevCommand === 0) return;
        else {
          dispatch(Actions.addCurrentCommand(commands[prevCommand - 1]));
          prevCommand !== 0 &&
            dispatch(Actions.addPrevCommand(prevCommand - 1));
        }
        return;
      }
      case "ArrowDown": {
        if (
          prevCommand === commands.length ||
          prevCommand === commands.length - 1
        )
          return;
        else {
          dispatch(Actions.addCurrentCommand(commands[prevCommand + 1]));
          prevCommand < commands.length &&
            dispatch(Actions.addPrevCommand(prevCommand + 1));
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
        value={currentCommand}
        ref={refInput}
        style={{ color: color }}
        onChange={e => dispatch(Actions.addCurrentCommand(e.target.value))}
      />
    </div>
  );
};

const mapStateToProps = ({ terminal, app }: State) => {
  return {
    history: terminal.history,
    commands: terminal.commands,
    currentCommand: terminal.currentCommand,
    prevCommand: terminal.prevCommand,
    color: app.color
  };
};

export default connect(mapStateToProps, null)(Content);
