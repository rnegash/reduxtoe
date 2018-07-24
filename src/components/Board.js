import React from "react";
import { connect } from "react-redux";

import Space from "./Space.js";
import { spaceClick, switchPlayer } from "../actions/actions.js";

const Board = ({ dispatch }) => {
  return (
    <div
      className="board"
      onClick={e => {
        let space = e.target;
        let bg = space.style.backgroundColor;

        dispatch(spaceClick(space.textContent));
        dispatch(switchPlayer());
        //props.currentplayer ? bg = "gray" : bg = "pink"
        if (space.style.backgroundColor !== "gray") {
          space.style.backgroundColor = "gray";
        } else {
          space.style.backgroundColor = "white";
        }
      }}
    >
      <div className="column">
        <Space position="0" />
        <Space position="1" />
        <Space position="2" />
      </div>
      <div className="column">
        <Space position="3" />
        <Space position="4" />
        <Space position="5" />
      </div>
      <div className="column">
        <Space position="6" />
        <Space position="7" />
        <Space position="8" />
      </div>
    </div>
  );
};

export default connect()(Board);
