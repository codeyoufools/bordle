import {createSlice} from '@reduxjs/toolkit';
import {words_all} from '../wordList';
import {reduxState} from '../types';
import {config} from '../app.config';

const getRandomWordOfLength = (length: number) => {
  const validWords = words_all.filter(w => {
    return w.length == length;
  });
  return validWords[Math.round(Math.random() * validWords.length)];
};

const getInitialState = () => {
  return {
    stage: 'playing',
    secret: getRandomWordOfLength(config.WORD_MAX_LETTERS),
    gameplayAlert: '',
    wordLength: config.WORD_MAX_LETTERS,
  };
};
const gameStateSlice = createSlice({
  name: 'gameState',
  initialState: getInitialState(),
  reducers: {
    endGame(state: reduxState['gameState']) {
      state.stage = 'over';
    },
    beginGame(state: reduxState['gameState']) {
      state.stage = 'playing';
    },

    setWordLength(state: reduxState['gameState'], action) {
      state.wordLength = action.payload;
    },
    setGameplayAlert(state: reduxState['gameState'], action) {
      state.gameplayAlert = action.payload;
    },
    resetGameState(state: reduxState['gameState']) {
      return {
        stage: 'playing',
        gameplayAlert: '',
        wordLength: state.wordLength,
        secret: getRandomWordOfLength(state.wordLength),
      };
    },
  },
});
export const {
  endGame,
  beginGame,
  setWordLength,
  setGameplayAlert,
  resetGameState,
} = gameStateSlice.actions;

export default gameStateSlice.reducer;
