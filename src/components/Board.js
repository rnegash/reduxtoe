import React, { Fragment } from "react";
import { connect } from "react-redux";

import Space from "./Space.js";
import Win from "./Win.js";
import { spaceClick, switchPlayer, setWinnerId } from "../actions/actions.js";

const Board = ({
  gameBoard,
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
          //let spaceId = event.target.textContent;
          if (!hasGameEnded(gameBoard)) {
            setPlayerPositionColor(event, currentPlayer);
            setWinnerId(currentPlayer);
          }
        }}
      >
        {hasGameEnded(gameBoard) && renderPlayerHasWon(winnerId)}
        <div className="column">
          {gameBoard.map((gameSpace, index) => (
            <Space
              {...gameSpace}
              onTileClick={onTileClick}
              index={index}
              key={index}
            />
          ))}
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

function hasGameEnded(gameBoard) {
  console.log(gameBoard[0].player);
  const horizontals = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  const verticals = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
  const diagonals = [[0, 4, 8], [2, 4, 6]];
  const formations = horizontals.concat(verticals, diagonals);
  for (let i = 0; i < formations.length; i++) {
    if (
      gameBoard[formations[i][0]].player ===
        gameBoard[formations[i][1]].player &&
      gameBoard[formations[i][1]].player ===
        gameBoard[formations[i][2]].player &&
      gameBoard[formations[i][0]].player !== null
    ) {
      return true;
    }
  }
  return false;
}

const processGameBoard = gameBoard =>
  gameBoard.map((item, index) => ({
    ...item,
    index
  }));

const mapStateToProps = state => {
  return {
    gameBoard: processGameBoard(state.gameState),
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
