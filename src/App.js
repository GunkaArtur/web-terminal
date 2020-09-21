import React from "react";
import "./App.scss";
import { Terminal } from "./Terminal/Terminal";
import { Menu } from "./menu";

function App() {
  return (
    <div className="container">
      <Menu />
      <Terminal />
    </div>
  );
}

export default App;
