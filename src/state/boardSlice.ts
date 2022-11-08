import {createSlice} from '@reduxjs/toolkit';
import {reduxState} from '../types';
const initialState = {
  guess: '',
  currentLine: 0,
  history: new Array(),
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setGuess(state: reduxState['board'], action) {
      state.guess = action.payload;
    },

    submitLine(state: reduxState['board']) {
      state.history.push(state.guess);
      state.currentLine++;
      state.guess = '';
    },
    resetBoardState() {
      return {...initialState};
    },
  },
});
export const {setGuess, submitLine, resetBoardState} = boardSlice.actions;

export default boardSlice.reducer;
