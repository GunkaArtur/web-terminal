import React, { useEffect } from "react";
import { Header } from "./Header";
import Content from "./Content";
import { useSelector, useDispatch } from "react-redux";
import { setColor, setFont, setTheme } from "../redux/actions";

export const Terminal = () => {
  const app = useSelector((state) => state.app);
  const { font, color, theme } = app;

  const dispatch = useDispatch();

  useEffect(() => {
    const app = JSON.parse(localStorage.getItem("app"));

    debugger;
    app && dispatch(setColor(app.color));
    app && dispatch(setTheme(app.theme));
    app && dispatch(setFont(app.font));
  }, []);

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
