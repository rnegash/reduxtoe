import React from "react";
import { connect } from "react-redux";

import Space from "./Space.js";
import { spaceClick, switchPlayer } from "../actions/actions.js";

const Board = ({ dispatch, gameState, currentPlayer, onTileClick }) => {
  return (
    <div
      className="board"
      onClick={event => {
        let spaceId = event.target.textContent;
        onTileClick(spaceId);

        setPlayerPositionColor(event, currentPlayer);
        //what was the benefits of this approach?
        hasGameEnded(gameState) ? console.log("win") : console.log("play on");
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

function setPlayerPositionColor(e, currentPlayer) {
  let space = e.target;
  currentPlayer
    ? (space.style.backgroundColor = "gray")
    : (space.style.backgroundColor = "pink");
}

function hasGameEnded(gameState) {
  const horizontals = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  const verticals = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
  const diagonals = [[0, 4, 8], [2, 4, 6]];
  const formations = horizontals.concat(verticals, diagonals);
  for (let i = 0; i < formations.length; i++) {
    if (
      gameState[formations[i][0]] === gameState[formations[i][1]] &&
      gameState[formations[i][1]] === gameState[formations[i][2]] &&
      gameState[formations[i][0]] !== "-"
    ) {
      return true;
    }
  }
  return false;
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
    currentPlayer: state.currentPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTileClick: spaceId => {
      dispatch(switchPlayer());
      dispatch(spaceClick(spaceId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
