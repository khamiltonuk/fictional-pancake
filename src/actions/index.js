import * as actions from "../constants";

export const resetGame = () => {
  return {
    type: actions.RESET_GAME
  };
};

export const showSettings = () => {
  return {
    type: actions.SHOW_SETTINGS
  };
};

export const hideSettings = () => {
  return {
    type: actions.HIDE_SETTINGS
  };
};

export const setGameMode = payload => {
  return {
    type: actions.SET_GAME_MODE,
    payload
  };
};

export const makeMove = payload => {
  return {
    type: actions.MAKE_MOVE,
    payload
  };
};

export const setGameLength = payload => {
  return {
    type: actions.SET_GAME_LENGTH,
    payload
  };
};
