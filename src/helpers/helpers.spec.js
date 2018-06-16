import { isGameOver, makeChoice, makeMove } from "./helpers";

describe("isGameOver", () => {
  test('should return "You win" if result.win equals game length', () => {
    const result = { win: 2, lose: 0, draw: 0 };
    expect(isGameOver(result, 2)).toEqual("You win");
  });

  test('should return "You win" if result.win greater than game length', () => {
    const result = { win: 2, lose: 0, draw: 0 };
    expect(isGameOver(result, 1)).toEqual("You win");
  });

  test("should return empty string if result.win less than game length", () => {
    const result = { win: 2, lose: 0, draw: 0 };
    expect(isGameOver(result, 3)).toEqual("");
  });

  test('should return "You lose" if result.lose equal to game length', () => {
    const result = { win: 0, lose: 2, draw: 0 };
    expect(isGameOver(result, 2)).toEqual("You lose");
  });

  test('should return "You lose" if result.lose is greater than game length', () => {
    const result = { win: 0, lose: 2, draw: 0 };
    expect(isGameOver(result, 1)).toEqual("You lose");
  });
});

describe("makeChoice", () => {
  test("should return a string", () => {
    const options = ["head", "shoulders", "knees", "toes"];
    expect(typeof makeChoice(options)).toEqual("string");
  });
});

describe("makeMove", () => {
  describe("when using rock, paper scissors", () => {
    const options = ["scissor", "paper", "rock"];
    test("should return a win increase if player one chooses rock and player two choose scissors", () => {
      const currentResult = { win: 0, lose: 2, draw: 0 };
      const expectedResult = { win: 1, lose: 2, draw: 0 };
      expect(makeMove(currentResult, "rock", "scissor", options)).toEqual(
        expectedResult
      );
    });

    test("should return a draw increase if player one and player two choose same", () => {
      const currentResult = { win: 0, lose: 2, draw: 0 };
      const expectedResult = { win: 0, lose: 2, draw: 1 };
      expect(makeMove(currentResult, "rock", "rock", options)).toEqual(
        expectedResult
      );
    });

    test("should return a lose increase if player one choses paper and player two chooses scissor", () => {
      const currentResult = { win: 0, lose: 2, draw: 0 };
      const expectedResult = { win: 0, lose: 3, draw: 0 };
      expect(makeMove(currentResult, "paper", "scissor", options)).toEqual(
        expectedResult
      );
    });
  });

  describe("when using rock, paper scissors", () => {
    const options = ["lizard", "spock", "scissor", "paper", "rock"];
    test("should return a win increase if player one chooses rock and player two choose scissors", () => {
      const currentResult = { win: 0, lose: 2, draw: 0 };
      const expectedResult = { win: 1, lose: 2, draw: 0 };
      expect(makeMove(currentResult, "rock", "scissor", options)).toEqual(
        expectedResult
      );
    });

    test("should return a draw increase if player one and player two choose same", () => {
      const currentResult = { win: 0, lose: 2, draw: 0 };
      const expectedResult = { win: 0, lose: 2, draw: 1 };
      expect(makeMove(currentResult, "rock", "rock", options)).toEqual(
        expectedResult
      );
    });

    test("should return a lose increase if player one choses paper and player two chooses scissor", () => {
      const currentResult = { win: 0, lose: 2, draw: 0 };
      const expectedResult = { win: 0, lose: 3, draw: 0 };
      expect(makeMove(currentResult, "paper", "scissor", options)).toEqual(
        expectedResult
      );
    });

    test("should lizard should poison spock", () => {
      const currentResult = { win: 0, lose: 2, draw: 0 };
      const expectedResult = { win: 0, lose: 3, draw: 0 };
      expect(makeMove(currentResult, "spock", "lizard", options)).toEqual(
        expectedResult
      );
    });

    test("should smash scissors", () => {
      const currentResult = { win: 0, lose: 2, draw: 0 };
      const expectedResult = { win: 1, lose: 2, draw: 0 };
      expect(makeMove(currentResult, "spock", "scissors", options)).toEqual(
        expectedResult
      );
    });
  });
});
