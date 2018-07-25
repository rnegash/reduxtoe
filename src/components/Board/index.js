import { connect } from "react-redux";
import { spaceClick, switchPlayer } from "../actions/actions.js";

function hasGameEnded(gameBoard) {
  const horizontals = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  const verticals = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
  const diagonals = [[0, 4, 8], [2, 4, 6]];
  const formations = horizontals.concat(verticals, diagonals);
  console.log("----------");
  for (let i = 0; i < formations.length; i++) {
    if (
      gameBoard[formations[i][0]] === gameBoard[formations[i][1]] &&
      gameBoard[formations[i][1]] === gameBoard[formations[i][2]] &&
      gameBoard[formations[i][0]] !== "-"
    ) {
      console.log("win");
      return true;
    }
  }
  return false;
}

//console.log(gameBoard);
//if the content of gameBoards indices at the formations subarrays is the same, return win

const processGameBoard = gameBoard =>
  gameBoard.map((item, index) => ({
    ...item,
    index
  }));

const mapStateToProps = state => {
  return {
    gameHasEnded: hasGameEnded(state.gameBoard),
    gameBoard: processGameBoard(state.gameBoard),
    currentPlayer: state.currentPlayer
  };
};

const mapDispatchToProps = dispatch => ({
  onTileClick: () => {
    dispatch(spaceClick(space.textContent));
    dispatch(switchPlayer());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
