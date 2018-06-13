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
