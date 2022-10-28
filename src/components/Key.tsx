import React, {useMemo, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';

import {useSelector} from 'react-redux';
import {reduxState} from '../types';

const Key: React.FC<{value: string; updateGuess: any}> = ({
  value,
  updateGuess,
}) => {
  const {correctLetters, incorrectLetters} = useSelector(
    (state: reduxState) => {
      return state.keyboard;
    },
  );
  return useMemo(() => {
    return (
      <TouchableOpacity
        onPressIn={() => {
          updateGuess.current(value);
        }}>
        <View
          style={[
            styles.keyboardKeyContainer,
            Object.values(correctLetters).includes(value)
              ? styles.keyboardKeyContainerCorrect
              : Object.values(incorrectLetters).includes(value)
              ? styles.keyboardKeyContainerIncorrect
              : {},
          ]}>
          <Text style={styles.keyboardKeyText}>{value.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }, [correctLetters, incorrectLetters]);
};
export default Key;
