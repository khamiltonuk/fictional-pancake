import reducers from "./";
import * as actions from "../actions";

describe("RESET_GAME", () => {
  test("should return results all to zero 2", () => {
    const startAction = { type: "RESET_GAME" };
    const startState = { result: { win: 0, lose: 5, draw: 0 } };
    const expectedResult = { result: { win: 0, lose: 0, draw: 0 } };
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
    const startAction = { type: "SET_GAME_MODE", payload: 9 };
    const startState = { gameMode: 3 };
    const expectedResult = { gameMode: 9 };
    expect(reducers(startState, startAction)).toEqual(expectedResult);
  });
});
