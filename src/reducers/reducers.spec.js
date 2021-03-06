import reducers from "./";
import { initialState } from "./";

describe("RESET_GAME", () => {
  test("should return results all to zero and both hands show rock as default", () => {
    const startAction = { type: "RESET_GAME" };
    const startState = { result: { win: 0, lose: 5, draw: 0 } };
    const expectedResult = {
      isGameOver: "",
      playerOneChoice: "rock",
      playerTwoChoice: "rock",
      result: { draw: 0, lose: 0, win: 0 },
    };
    expect(reducers(startState, startAction)).toEqual(expectedResult);
  });
});

describe("SHOW_SETTINGS", () => {
  test("should set isSettingsOpen to true if previously false", () => {
    const startAction = { type: "SHOW_SETTINGS" };
    const startState = { isSettingsOpen: false };
    const expectedResult = { isSettingsOpen: true };
    expect(reducers(startState, startAction)).toEqual(expectedResult);
  });

  test("should remain true if isSettingsOpen is previously true", () => {
    const startAction = { type: "SHOW_SETTINGS" };
    const startState = { isSettingsOpen: true };
    const expectedResult = { isSettingsOpen: true };
    expect(reducers(startState, startAction)).toEqual(expectedResult);
  });
});

describe("HIDE_SETTINGS", () => {
  test("should set isSettingsOpen to false if previously true", () => {
    const startAction = { type: "HIDE_SETTINGS" };
    const startState = { isSettingsOpen: true };
    const expectedResult = { isSettingsOpen: false };
    expect(reducers(startState, startAction)).toEqual(expectedResult);
  });

  test("should remain false if isSettingsOpen is previously false", () => {
    const startAction = { type: "HIDE_SETTINGS" };
    const startState = { isSettingsOpen: false };
    const expectedResult = { isSettingsOpen: false };
    expect(reducers(startState, startAction)).toEqual(expectedResult);
  });
});

describe("SET_GAME_MODE", () => {
  test("should set game Mode to the value of payload", () => {
    const startAction = { type: "SET_GAME_MODE", payload: "rpsls" };
    const startState = { gameMode: "rps" };
    const expectedResult = {
      gameMode: "rpsls",
      moves: ["paper", "rock", "lizard", "spock", "scissors"],
    };
    expect(reducers(startState, startAction)).toEqual(expectedResult);
  });
});

describe("SET_GAME_LENGTH", () => {
  test("should set game Length to the value of payload", () => {
    const startAction = { type: "SET_GAME_LENGTH", payload: 9 };
    const startState = { gameLength: 3 };
    const expectedResult = { gameLength: 9 };
    expect(reducers(startState, startAction)).toEqual(expectedResult);
  });
});

describe("UNKNOWN", () => {
  test("should handle unknown event and return default", () => {
    const startAction = { type: "UNKNOWN", payload: 9 };
    const startState = initialState;
    const expectedResult = initialState;
    expect(reducers(startState, startAction)).toEqual(expectedResult);
  });
});
