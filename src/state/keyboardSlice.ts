import {createSlice} from '@reduxjs/toolkit';
import {reduxState} from '../types';

const initialState = {correctLetters: '', incorrectLetters: '', enabled: true};

const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    updateKeyboardLetters(
      state: reduxState['keyboard'],
      action: {payload: {correct: string; incorrect: string}},
    ) {
      Object.values(action.payload.correct).forEach(l => {
        if (
          !state.correctLetters.includes(l) &&
          !state.incorrectLetters.includes(l)
        ) {
          state.correctLetters += l;
        }
      });
      Object.values(action.payload.incorrect).forEach(l => {
        if (
          !state.correctLetters.includes(l) &&
          !state.incorrectLetters.includes(l)
        ) {
          state.incorrectLetters += l;
        }
      });
    },
    disableKeyboard(state: reduxState['keyboard']) {
      state.enabled = false;
    },
    resetKeyboard(state: reduxState['keyboard']) {
      return initialState;
    },
  },
});
export const {resetKeyboard, disableKeyboard, updateKeyboardLetters} =
  keyboardSlice.actions;
export default keyboardSlice.reducer;
