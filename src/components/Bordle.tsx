/**
 * Simple word game with 5 letters or as many as you want just change app.config.ts
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Keyboard} from './Keyboard';
import {Board} from './Board';
import {styles} from '../styles';
import {AlertBox} from './AlertBox';
import {resetGameState} from '../state/gameStateSlice';
import {resetKeyboard} from '../state/keyboardSlice';
import {resetBoardState} from '../state/boardSlice';
import {ToggleableButtons} from './ToggleableButton';
const startNewGame = (dispatch: any) => {
  dispatch(resetGameState());
  dispatch(resetBoardState());
  dispatch(resetKeyboard());
};
const Bordle = () => {
  const dispatch = useDispatch();
  const {stage} = useSelector((state: any) => state.gameState);

  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <Board />
        <AlertBox />
        {stage == 'over' ? (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text>Select word length:</Text>
            <ToggleableButtons />
            <Button
              title="New Game"
              onPress={() => {
                startNewGame(dispatch);
              }}
            />
          </View>
        ) : undefined}
        <Keyboard />
      </View>
    </SafeAreaView>
  );
};

export default Bordle;
