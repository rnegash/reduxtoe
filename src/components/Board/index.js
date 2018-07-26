import { connect } from "react-redux";
import { spaceClick, switchPlayer } from "./../actions/actions.js";
import { Board } from "./Board.js";
export function hasGameEnded(gameState) {
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
