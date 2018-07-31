import React from "react";

const Space = ({ onTileClick, index, currentPlayer }) => {
  return (
    <span
      className={`space ${getClass(currentPlayer)}`}
      onClick={() => onTileClick(index)}
    >
      {index}
    </span>
  );
};

function getClass(player) {
  if (player === 0) return "p1";
  if (player === 1) return "p2";
  return "";
}
export default Space;
