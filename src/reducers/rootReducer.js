import { SPACE_CLICK } from "../actions/actions.js";

export default function reducer(state = [], action) {
  switch (action.type) {
    case SPACE_CLICK:
      console.log("SPACE_CLICK");
      break;
    default:
      return state;
  }
}
