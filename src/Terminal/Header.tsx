import React, {ReactElement} from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faMinusCircle,
  faPlusCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import {State} from "../types/state"

export const Header = ():ReactElement => {
  const theme = useSelector((state:State) => state.app.theme);

  return (
    <div className="terminal--header">
      <div className="buttons">
        <span>
          <FontAwesomeIcon
            icon={theme === "osX" ? faCircle : faTimesCircle}
            color={theme === "osX" ? "#F25056" : "#D75224"}
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={theme === "osX" ? faCircle : faMinusCircle}
            color={theme === "osX" ? "#FAC536" : "#555555"}
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={theme === "osX" ? faCircle : faPlusCircle}
            color={theme === "osX" ? "#39EA49" : "#555555"}
          />
        </span>
      </div>
      <div className="title">user@host:/$</div>
    </div>
  );
};
