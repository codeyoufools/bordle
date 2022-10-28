export type reduxState = {
  keyboard: {
    correctLetters: string;
    incorrectLetters: string;
    enabled: boolean;
  };
  board: {
    guess: string;
    currentLine: number;
    history: string[];
  };
  gameState: {
    stage: string;
    secret: string;
    gameplayAlert: string;
  };
};
