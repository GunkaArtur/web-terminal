import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setColor, setFont } from "./redux/actions";

export const Menu = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.app.color);
  const theme = useSelector((state) => state.app.theme);
  const font = useSelector((state) => state.app.font)
    .trim()
    .split(" ")
    .join("-");

  return (
    <div className="menu">
      <label htmlFor="theme">Choose a theme:</label>

      <select
        onChange={(e) => dispatch(setTheme(e.target.value))}
        name="theme"
        id="theme"
        value={theme}
      >
        <option value="ubuntu">ubuntu</option>
        <option value="osX">osX</option>
      </select>

      <label htmlFor="font">Choose font:</label>

      <select
        onChange={(e) => dispatch(setFont(e.target.value))}
        name="font"
        id="font"
        value={font}
      >
        <option value="courier">Courier New</option>
        <option value="arial">Arial</option>
      </select>

      <label htmlFor="color">Choose color:</label>
      <input
        value={color}
        name="color"
        onChange={(e) => dispatch(setColor(e.target.value))}
        type="color"
      />
    </div>
  );
};
