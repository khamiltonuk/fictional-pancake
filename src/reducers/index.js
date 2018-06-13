import {
  RESET_GAME,
  SHOW_SETTINGS,
  HIDE_SETTINGS,
  TOGGLE_AI_MODE,
  SET_GAME_MODE,
  SET_GAME_LENGTH,
  MAKE_MOVE
} from "../constants";

const initialState = {
  result: { win: 0, lose: 7, draw: 0 },
  isSettingsOpen: false,
  isComputerPlaying: true,
  gameMode: ["rock", "paper", "sissor", "spock", "lizard"],
  gameLength: 3,
  isGameOver: false
};

// make a move
// deside winner
// update score

function makeMove(result, move) {
  console.log(move);
  return {
    win: 0,
    lose: 0,
    draw: 0
  };
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case MAKE_MOVE:
      return { ...state, result: makeMove(state.result, payload) };
    case SET_GAME_MODE:
      return { ...state, gameMode: payload };
    case SET_GAME_LENGTH:
      return { ...state, gameMode: payload };
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
