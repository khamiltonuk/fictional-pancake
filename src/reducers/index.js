import {
  RESET_GAME,
  SHOW_SETTINGS,
  HIDE_SETTINGS,
  TOGGLE_AI_MODE
} from "../constants";

const initialState = {
  result: { win: 0, lose: 7, draw: 0 },
  isSettingsOpen: false,
  isComputerPlaying: true
};

export default function(state = initialState, { type }) {
  switch (type) {
    case TOGGLE_AI_MODE:
      return { ...state, isComputerPlaying: !state.isComputerPlaying };
    case SHOW_SETTINGS:
      return { ...state, isSettingsOpen: true };
    case HIDE_SETTINGS:
      return { ...state, isSettingsOpen: false };
    case RESET_GAME:
      return { ...state, result: { win: 0, lose: 0, draw: 0 } };
    default:
      return state;
  }
}
