export const SPACE_CLICK = "SPACE_CLICK";
export const SWITCH_PLAYER = "SWITCH_PLAYER";

export function spaceClick(spaceId) {
  return { type: SPACE_CLICK, spaceId };
}

export function switchPlayer() {
  return { type: SWITCH_PLAYER };
}
