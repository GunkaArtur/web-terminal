import React, { useEffect, useState } from "react";
import MockCommands from "../service/mock-commands";

export const Content = () => {
  const [commandList, setCommandList] = useState([]);
  const [history, setHistory] = useState([]);
  const [comands, setComands] = useState([]);
  const [currentComand, setCurrentComand] = useState("");
  const [prevComand, setPrevComand] = useState(0);

  const mockCom = new MockCommands();

  async function getAllComands() {
    const list = await mockCom.getApiComands();
    return list;
  }

  async function getValue(command) {
    const value = await mockCom[command]();
    return value;
  }

  useEffect(() => {
    async function getData() {
      const list = await getAllComands();
      setCommandList(list);
    }
    getData();
  }, [getAllComands]);

  const refInput = React.createRef();

  const handleKeyDown = async ({ key, target }) => {
    switch (key) {
      case "Enter": {
        let answer = [];
        if (commandList.includes(currentComand)) {
          answer = await getValue(currentComand);
        } else {
          answer = { answer: "Comand not found!" };
        }
        if (target.value) {
          setComands([...comands, target.value]);
        }
        if (answer.answer === "clear") {
          setHistory([]);
        } else {
          setHistory([...history, currentComand, answer.answer]);
        }
        setCurrentComand("");
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
        onChange={(e) => setCurrentComand(e.target.value)}
      />
    </div>
  );
};
