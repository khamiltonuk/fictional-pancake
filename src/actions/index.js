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

export const toggleAiMode = () => {
  return {
    type: actions.TOGGLE_AI_MODE
  };
};