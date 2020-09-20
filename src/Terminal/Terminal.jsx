import React, { useEffect } from "react";
import { Header } from "./Header";
import Content from "./Content";
import { useSelector, useDispatch } from "react-redux";
import { setColor, setFont, setTheme } from "../redux/actions";

export const Terminal = () => {
  const font = useSelector((state) => state.app.font)
    .trim()
    .split(" ")
    .join("-");

  const color = useSelector((state) => state.app.color);
  const theme = useSelector((state) => state.app.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const color = localStorage.getItem("color");
    const font = localStorage.getItem("font");

    color && dispatch(setColor(color));
    theme && dispatch(setTheme(theme));
    font && dispatch(setFont(font));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("color", color);
    localStorage.setItem("font", font);
  }, [font, theme, color]);

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
