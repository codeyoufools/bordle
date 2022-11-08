import {configureStore} from '@reduxjs/toolkit';
import gameStateReducer from './gameStateSlice';
import boardReducer from './boardSlice';
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
