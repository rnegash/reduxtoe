import { SPACE_CLICK, SWITCH_PLAYER } from "../actions/actions.js";

let initialState = { gameState: new Array(9).fill("-"), currentPlayer: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SPACE_CLICK:
      return {
        gameState: setPlayerPosition(
          state.gameState,
          action.spaceId,
          state.currentPlayer
        ),
        ...state
      };
    case SWITCH_PLAYER:
      return {
        ...state,
        currentPlayer: playerSwitch(state.currentPlayer)
      };
    default:
      return state;
  }
}

function setPlayerPosition(gameArray, spaceId, currentPlayer) {
<<<<<<< HEAD
  //return (gameArray[spaceId] = currentPlayer);
=======
>>>>>>> recognize-formations
  let updatedArray = gameArray;
  updatedArray[spaceId] = currentPlayer;
  return updatedArray;
}

function playerSwitch(currentPlayer) {
  let nextPlayer = currentPlayer ? 0 : 1;
  return nextPlayer;
}
