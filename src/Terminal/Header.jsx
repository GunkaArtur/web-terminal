import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="terminal--header">
      <div className="buttons">
        <a href="#">
          <FontAwesomeIcon icon={faTimesCircle} color="#D75224" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faMinusCircle} color="#555555" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faPlusCircle} color="#555555" />
        </a>
      </div>
      <div className="title">user@host:/$</div>
    </div>
  );
};
