import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setWordLength} from '../state/gameStateSlice';
import {styles} from '../styles';
import {reduxState} from '../types';

export const ToggleableButtons = () => {
  const initial = useSelector((state: reduxState) => {
    return state.gameState.wordLength;
  });
  const [choice, setChoice] = useState(initial);
  const dispatch = useDispatch();

  return (
    <View style={{display: 'flex', flexDirection: 'row', paddingVertical: 20}}>
      <Pressable
        style={
          choice == 4
            ? styles.wordLengthButtonSelected
            : styles.wordLengthButton
        }
        onPress={() => {
          setChoice(4);
          dispatch(setWordLength(4));
        }}>
        <Text style={styles.wordLengthText}>4</Text>
      </Pressable>
      <Pressable
        style={
          choice == 5
            ? styles.wordLengthButtonSelected
            : styles.wordLengthButton
        }
        onPress={() => {
          setChoice(5);
          dispatch(setWordLength(5));
        }}>
        <Text style={styles.wordLengthText}>5</Text>
      </Pressable>
      <Pressable
        style={
          choice == 6
            ? styles.wordLengthButtonSelected
            : styles.wordLengthButton
        }
        onPress={() => {
          setChoice(6);
          dispatch(setWordLength(6));
        }}>
        <Text style={styles.wordLengthText}>6</Text>
      </Pressable>
    </View>
  );
};
