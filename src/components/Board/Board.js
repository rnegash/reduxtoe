import React from "react";

import Space from "./Space.js";

const Board = ({ gameBoard, onTileClick }) => {
  return (
    <div className="board">
      <div className="column">
        {gameBoard.map(gameSpace => (
          <Space {...gameSpace} onClick={onTileClick} />
        ))}
      </div>
    </div>
  );
};
