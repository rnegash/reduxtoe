import {
  SPACE_CLICK,
  SWITCH_PLAYER,
  SET_WINNER_ID
} from "../actions/actions.js";

let initialState = {
  gameState: new Array(9).fill("-"),
  currentPlayer: 0,
  winnerId: null
};

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
    case SET_WINNER_ID:
      return {
        ...state,
        winnerId: action.playerId
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
  let updatedArray = gameArray;
  updatedArray[spaceId] = currentPlayer;
  return updatedArray;
}

function playerSwitch(currentPlayer) {
  let nextPlayer = currentPlayer ? 0 : 1;
  return nextPlayer;
}
