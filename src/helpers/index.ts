import type { ResultsT } from "../types";

export const makeMove = (
  result: ResultsT,
  choice1: string,
  choice2: string,
  options: string[]
) => {
  const index1 = options.indexOf(choice1);
  const index2 = options.indexOf(choice2);
  let dif = index2 - index1;
  let draws = result.draw,
    wins = result.win,
    loses = result.lose;

  if (dif < 0) {
    dif += options.length;
  }
  while (dif > 2) {
    dif -= 2;
  }

  if (choice1 === choice2) {
    draws = result.draw + 1;
  }
  if (dif === 1) {
    wins = result.win + 1;
  } else if (dif === 2) {
    loses = result.lose + 1;
  }
  return {
    win: wins,
    lose: loses,
    draw: draws,
  };
};

export function isGameOver(
  { win, lose }: ResultsT,
  gameLength: string
): string {
  const winningScore = parseInt(gameLength, 10);
  if (win >= winningScore && winningScore !== 0) {
    return "You win";
  } else if (lose >= winningScore && winningScore !== 0) {
    return "You lose";
  } else {
    return "";
  }
}

export function makeChoice(options: string[]): string {
  return options[Math.floor(Math.random() * options.length)];
}

export function setMoves(gameMode: string): string[] {
  if (gameMode === "rpsls") {
    return ["paper", "rock", "lizard", "spock", "scissors"];
  }
  return ["scissor", "paper", "rock"];
}
