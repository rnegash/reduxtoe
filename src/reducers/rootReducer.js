import { SPACE_CLICK, SWITCH_PLAYER } from "../actions/actions.js";

let initialState = { gameState: new Array(9), currentPlayer: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SPACE_CLICK:
      return state;
    case SWITCH_PLAYER:
      return {
        ...state,
        currentPlayer: playerSwitch(state.currentPlayer)
      };
    default:
      return state;
  }
}

function playerSwitch(currentPlayer) {
  console.log(currentPlayer);

  let nextPlayer = currentPlayer ? 0 : 1;
  console.log(currentPlayer);

  return nextPlayer;
}
