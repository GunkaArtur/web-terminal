import React from "react";
import "./App.css";
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
