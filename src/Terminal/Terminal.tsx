import React, { ReactElement, useEffect } from "react";
import { Header } from "./Header";
import Content from "./Content";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../redux/actions";
import { State } from "../types/state";

export const Terminal = (): ReactElement => {
  const app = useSelector((state: State) => state.app);
  const { font, color, theme } = app;

  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    const app = JSON.parse(localStorage.getItem("app"));

    if (app) {
      dispatch(Actions.setColor(app.color));
      dispatch(Actions.setTheme(app.theme));
      dispatch(Actions.setFont(app.font));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("app", JSON.stringify(app));
  }, [app]);

  return (
    <div
      className={`terminal terminal--${font} terminal--${theme}`}
      style={{ color: color }}
    >
      <Header />
      <Content />
    </div>
  );
};
