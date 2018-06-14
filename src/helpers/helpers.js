export const makeMove = (result, choice1, choice2, options) => {
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
    draw: draws
  };
};

export function isGameOver(result, gameLength) {
  debugger;
  let isGameOver = false;
  if (result.win >= gameLength || result.lose >= gameLength) {
    isGameOver = true;
  }
  return isGameOver;
}

export function makeChoice(options) {
  return options[Math.floor(Math.random() * options.length)];
}
