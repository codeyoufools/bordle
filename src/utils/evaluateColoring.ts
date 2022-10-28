const toASCII = (c: string) => {
  return c.charCodeAt(0) - 97;
};
export const evaluateKeyboardColoring = (guess: string, correct: string) => {
  const correct_letters = [];
  const incorrect_letters = [];

  for (let i = 0; i < correct.length; i++) {
    if (guess[i] == correct[i]) {
      correct_letters.push(guess[i]);
    } else {
      if (!correct.includes(guess[i])) {
        incorrect_letters.push(guess[i]);
      }
    }
  }

  return [correct_letters.join(''), incorrect_letters.join('')];
};
export const evaluateBoardColoring = (guess: string, correct: string) => {
  const count = new Array(26);
  count.fill(0);

  Object.values(correct).map(k => {
    count[toASCII(k)]++;
  });

  const solution = new Array(correct.length);
  solution.fill(undefined);

  for (let i = 0; i < correct.length; i++) {
    if (guess[i] == correct[i]) {
      solution[i] = 'LETTER_CORRECT';
      count[toASCII(guess[i])]--;
    }
  }
  for (let i = 0; i < correct.length; i++) {
    if (solution[i]) continue;
    if (count[toASCII(guess[i])] > 0) {
      solution[i] = 'LETTER_MISPLACED';
      count[toASCII(guess[i])]--;
    } else {
      solution[i] = 'LETTER_INCORRECT';
    }
  }

  return solution;
};
