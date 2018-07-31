import React, { Fragment } from "react";
import { connect } from "react-redux";

import Space from "./Space.js";
import Win from "./Win.js";
import { spaceClick, switchPlayer, setWinnerId } from "../actions/actions.js";

const Board = ({
  gameState,
  currentPlayer,
  onTileClick,
  setWinnerId,
  winnerId
}) => {
  return (
    <Fragment>
      <div
        className="board"
        onClick={event => {
          let spaceId = event.target.textContent;
          if (!hasGameEnded(gameState)) {
            onTileClick(spaceId);
            setPlayerPositionColor(event, currentPlayer);
            setWinnerId(currentPlayer);
          }
        }}
      >
        {hasGameEnded(gameState) && renderPlayerHasWon(winnerId)}
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
    </Fragment>
  );
};

function renderPlayerHasWon(currentPlayer) {
  const playerId = currentPlayer + 1;
  console.log(`Congratulations! Player ${playerId} has won`);
  return <Win playerId={playerId} />;
}

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
    let position1 = gameState[formations[i][0]];
    let position2 = gameState[formations[i][1]];
    let position3 = gameState[formations[i][2]];
    if (
      isSamePlayer(position1, position2) &&
      isSamePlayer(position2, position3) &&
      gameState[formations[i][0]] !== "-"
    ) {
      return true;
    }
  }
  return false;
}

function isSamePlayer(space1, space2) {
  let isSame = false;
  space1 === space2 ? (isSame = true) : (isSame = false);
  return isSame;
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
    winnerId: state.winnerId,
    currentPlayer: state.currentPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTileClick: spaceId => {
      dispatch(spaceClick(spaceId));
      dispatch(switchPlayer());
    },
    setWinnerId: playerId => {
      dispatch(setWinnerId(playerId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
