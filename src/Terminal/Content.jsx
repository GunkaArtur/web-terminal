import React, { useState } from "react";
import MockCommands from "../service/mock-commands";

export const Content = () => {
  const [history, setHistory] = useState([]);
  const [comands, setComands] = useState([]);
  const [currentComand, setCurrentComand] = useState("");
  const [prevComand, setPrevComand] = useState(0);

  const mockCom = new MockCommands();

  const avaibleCommands = mockCom.getCommands();

  const refInput = React.createRef();

  const handleKeyDown = ({ key, target }) => {
    console.log("key", key);
    switch (key) {
      case "Enter": {
        const answer = avaibleCommands.includes(currentComand)
          ? mockCom[currentComand]()
          : [{ answer: "Comand not found!" }];
        setHistory([...history, target.value]);
        if (target.value) setComands([...comands, target.value]);
        setCurrentComand("");
        setHistory([...history, currentComand, answer[0].answer]);
        setPrevComand(comands.length + 1);
        return;
      }
      case "ArrowUp": {
        if (prevComand === 0) return;
        else {
          setCurrentComand(comands[prevComand - 1]);
          if (prevComand !== 0) {
            setPrevComand(prevComand - 1);
          }
        }
        return;
      }
      case "ArrowDown": {
        if (prevComand === comands.length || prevComand === comands.length - 1)
          return;
        else {
          setCurrentComand(comands[prevComand + 1]);
          if (prevComand < comands.length) {
            setPrevComand(prevComand + 1);
          }
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
        {history.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <span>user@host:/$ </span>

      <input
        className="terminal--input"
        type="text"
        onKeyDown={(e) => handleKeyDown(e)}
        value={currentComand}
        ref={refInput}
        onChange={(e) => setCurrentComand(e.target.value)}
      />
    </div>
  );
};
