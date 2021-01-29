import React, { ReactElement } from "react";
import { Terminal } from "./Terminal/Terminal";
import { Menu } from "./menu";
import "./App.scss";

function App(): ReactElement {
  return (
    <div className="container">
      <Menu />
      <Terminal />
    </div>
  );
}

export default App;
