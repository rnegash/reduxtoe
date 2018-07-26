import React from "react";

import Space from "./../Space.js";
import hasGameEnded from "./index.js";

const Board = ({ gameState, currentPlayer, onTileClick }) => {
  return (
    <div
      className="board"
      onClick={event => {
        let spaceId = event.target.textContent;
        onTileClick(spaceId);
        setPlayerPositionColor(event, currentPlayer);
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

export default Board;
