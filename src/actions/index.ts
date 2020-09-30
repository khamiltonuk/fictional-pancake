export const RESET_GAME = "RESET_GAME";
export const SHOW_SETTINGS = "SHOW_SETTINGS";
export const HIDE_SETTINGS = "HIDE_SETTINGS";
export const SET_GAME_MODE = "SET_GAME_MODE";
export const MAKE_MOVE = "MAKE_MOVE";
export const SET_GAME_LENGTH = "SET_GAME_LENGTH";
export const ANIMATE_HANDS = "ANIMATE_HANDS";

export type ActionT =  // Discriminated Unions
  | {
      type: "RESET_GAME";
    }
  | {
      type: "SHOW_SETTINGS";
    }
  | {
      type: "HIDE_SETTINGS";
    }
  | {
      type: "SET_GAME_MODE";
      payload: "rpsls" | "rps";
    }
  | {
      type: "MAKE_MOVE";
      payload: string;
    }
  | {
      type: "SET_GAME_LENGTH";
      payload: string;
    }
  | {
      type: "ANIMATE_HANDS";
    };

export const resetGame = (): ActionT => {
  return {
    type: RESET_GAME,
  };
};

export const showSettings = (): ActionT => {
  return {
    type: SHOW_SETTINGS,
  };
};

export const hideSettings = (): ActionT => {
  return {
    type: HIDE_SETTINGS,
  };
};

export const setGameMode = (payload: "rpsls" | "rps"): ActionT => {
  return {
    type: SET_GAME_MODE,
    payload,
  };
};

export const makeMove = (payload: string): ActionT => {
  return {
    type: MAKE_MOVE,
    payload,
  };
};

export const setGameLength = (payload: string): ActionT => {
  return {
    type: SET_GAME_LENGTH,
    payload,
  };
};

export const animateHands = (): ActionT => {
  return {
    type: ANIMATE_HANDS,
  };
};
