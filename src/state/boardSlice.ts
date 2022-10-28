import {createSlice} from '@reduxjs/toolkit';
import {reduxState} from '../types';
import {config} from '../app.config';
const initialState = {
  guess: '',
  currentLine: 0,
  history: new Array(config.BOARD_MAX_ROWS).fill(''),
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setGuess(state: reduxState['board'], action) {
      state.guess = action.payload;
    },
    appendGuess(state: reduxState['board'], action) {
      if (state.guess.length < config.WORD_MAX_LETTERS) {
        state.guess += action.payload;
      }
    },
    deleteGuess(state: reduxState['board']) {
      if (state.guess.length > 0) {
        state.guess = state.guess.slice(0, state.guess.length - 1);
      }
    },
    submitLine(state: reduxState['board']) {
      if (state.currentLine < config.BOARD_MAX_ROWS) {
        state.history[state.currentLine] = state.guess;
        state.currentLine++;
        state.guess = '';
      }
    },
    resetBoardState() {
      return initialState;
    },
  },
});
export const {setGuess, appendGuess, deleteGuess, submitLine, resetBoardState} =
  boardSlice.actions;

export default boardSlice.reducer;
