import {
  endGame,
  beginGame,
  setWordLength,
  setGameplayAlert,
  resetGameState,
} from '../src/state/gameStateSlice';
import reducer from '../src/state/gameStateSlice';
import {reduxState} from '../src/types';
const generateMockState = (): reduxState['gameState'] => {
  return {stage: 'playing', secret: 'house', gameplayAlert: '', wordLength: 5};
};
test('ends the game', () => {
  expect(reducer(generateMockState(), endGame())).toEqual({
    ...generateMockState(),
    stage: 'over',
  });
});
test('begins the game', () => {
  expect(reducer({...generateMockState(), stage: 'over'}, beginGame())).toEqual(
    {
      ...generateMockState(),
      stage: 'playing',
    },
  );
});

test('sets the current word length', () => {
  expect(reducer(generateMockState(), setWordLength(4)).wordLength).toEqual(4);
});
test('sets the gameplay alert', () => {
  expect(
    reducer(generateMockState(), setGameplayAlert('alert')).gameplayAlert,
  ).toEqual('alert');
});
test('resets the entire game state', () => {
  let prevState = generateMockState();
  prevState = reducer(prevState, setWordLength(6));
  prevState = reducer(prevState, setGameplayAlert('abcd'));
  const newState = reducer(prevState, resetGameState());
  expect(newState.gameplayAlert).toEqual('');
  expect(newState.secret.length).toEqual(newState.wordLength);
  expect(newState.stage).toEqual('playing');
  expect(newState.wordLength).toEqual(prevState.wordLength);
});
