import { SPACE_CLICK, SWITCH_PLAYER } from "../actions/actions.js";

let gameState = new Array(9);
let currentPlayer = 0;

let initialState = {
  currentPlayer,
  gameState
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SPACE_CLICK:
      console.log(action.spaceId);
      break;
    case SWITCH_PLAYER:
      console.log("should switch player", currentPlayer);
      return [
        ...state,
        {
          currentPlayer: 1
        }
      ];
    default:
      return state;
  }
}
