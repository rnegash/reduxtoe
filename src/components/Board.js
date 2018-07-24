import React from "react";
import { connect } from "react-redux";

import Space from "./Space.js";
import { spaceClick, switchPlayer } from "../actions/actions.js";

const Board = ({ dispatch, state, currentPlayer }) => {
  return (
    <div
      className="board"
      onClick={e => {
        let space = e.target;
        //let bg = space.style.backgroundColor;

        dispatch(spaceClick(space.textContent));
        dispatch(switchPlayer());
        currentPlayer
          ? (space.style.backgroundColor = "gray")
          : (space.style.backgroundColor = "pink");

        //const { currentPlayer } = props;
        console.log("currentPlayer", currentPlayer);
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

const mapStateToProps = state => {
  return {
    state: state,
    currentPlayer: state.currentPlayer
  };
};

export default connect(mapStateToProps)(Board);
