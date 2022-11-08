import {setGuess, submitLine, resetBoardState} from '../src/state/boardSlice';
import reducer from '../src/state/boardSlice';
import {reduxState} from '../src/types';

const initialState: reduxState['board'] = {
  guess: '',
  currentLine: 0,
  history: new Array<string>(),
};
test('sets the current guess word', () => {
  expect(reducer(initialState, setGuess('house')).guess).toEqual('house');
});
test('updates the current line active on the board', () => {
  expect(reducer(initialState, submitLine()).currentLine).toEqual(1);
});
test('resets the entire game state', () => {
  let state = {...initialState};
  state = reducer(state, setGuess('crate'));
  state = reducer(state, submitLine());
  expect(reducer(state, resetBoardState())).toEqual(initialState);
});
