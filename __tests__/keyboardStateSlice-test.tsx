import {
  resetKeyboard,
  disableKeyboard,
  updateKeyboardLetters,
} from '../src/state/keyboardSlice';
import reducer from '../src/state/keyboardSlice';
import {reduxState} from '../src/types';

const initialState: reduxState['keyboard'] = {
  correctLetters: '',
  incorrectLetters: '',
  enabled: true,
};
test('resets keyboard state', () => {
  let state = initialState;
  state = reducer(state, disableKeyboard());
  state = reducer(
    state,
    updateKeyboardLetters({correct: 'aw', incorrect: 'fg'}),
  );
  expect(reducer(state, resetKeyboard())).toEqual({...initialState});
});
test('disables keyboard input', () => {
  expect(reducer(initialState, disableKeyboard())).toEqual({
    ...initialState,
    enabled: false,
  });
});
test('updates keyboard letters to reflect correct and incorrect guesses', () => {
  expect(
    reducer(
      initialState,
      updateKeyboardLetters({correct: 'abc', incorrect: 'efg'}),
    ),
  ).toEqual({
    ...initialState,
    correctLetters: 'abc',
    incorrectLetters: 'efg',
  });
});
