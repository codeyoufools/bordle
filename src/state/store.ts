import {configureStore, createListenerMiddleware} from '@reduxjs/toolkit';
import gameStateReducer from './gameStateSlice';
import boardReducer, {appendGuess} from './boardSlice';
import keyboardReducer from './keyboardSlice';

export default configureStore({
  reducer: {
    gameState: gameStateReducer,
    board: boardReducer,
    keyboard: keyboardReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableStateInvariant: false,
      immutableStateInvariant: false,
    }),
});
