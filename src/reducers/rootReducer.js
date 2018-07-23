import { SPACE_CLICK, SWITCH_PLAYER } from "../actions/actions.js";

let initialState = { gameState: new Array(9), currentPlayer: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SPACE_CLICK:
      console.log(action.spaceId);
      break;
    case SWITCH_PLAYER:
      return [
        {
          ...state,
          currentPlayer: playerSwitch(state.currentPlayer)
        }
      ];
    default:
      return state;
  }
}

function playerSwitch(currentPlayer) {
  let nextPlayer = currentPlayer ? 0 : 1;
  return nextPlayer;
}
