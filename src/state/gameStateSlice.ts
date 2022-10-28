import {createSlice} from '@reduxjs/toolkit';
import {wordList} from '../wordList';
import {reduxState} from '../types';

const getInitialState = () => {
  return {
    stage: 'playing',
    secret: wordList[Math.round(Math.random() * wordList.length)],
    gameplayAlert: '',
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
    setSecret(state: reduxState['gameState'], action) {
      state.secret = action.payload;
    },
    setGameplayAlert(state: reduxState['gameState'], action) {
      state.gameplayAlert = action.payload;
    },
    resetGameState() {
      return {
        ...getInitialState(),
        secret: wordList[Math.round(Math.random() * wordList.length)],
      };
    },
  },
});
export const {endGame, beginGame, setSecret, setGameplayAlert, resetGameState} =
  gameStateSlice.actions;

export default gameStateSlice.reducer;
