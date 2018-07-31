import React from "react";

const Space = ({ position, onTileClick, index }) => {
  return (
    <span className="space" onClick={() => onTileClick(index)}>
      {index}
    </span>
  );
};
export default Space;
