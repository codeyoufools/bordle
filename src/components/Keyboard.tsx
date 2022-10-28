import React, {useMemo, useRef} from 'react';
import {View} from 'react-native';
import Key from './Key';
import KeyboardRow from './KeyboardRow';
import {styles} from '../styles';
import {setGuess, submitLine} from '../state/boardSlice';
import {endGame, setGameplayAlert} from '../state/gameStateSlice';
import {disableKeyboard, updateKeyboardLetters} from '../state/keyboardSlice';
import {evaluateKeyboardColoring} from '../utils/evaluateColoring';
import {wordList} from '../wordList';
import {useDispatch, useSelector} from 'react-redux';
import {reduxState} from '../types';
import {config} from '../app.config';

const f = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

export const Keyboard = () => {
  const dispatch = useDispatch();
  const {guess, currentLine} = useSelector((state: reduxState) => {
    return state.board;
  });
  const {secret} = useSelector((state: reduxState) => {
    return state.gameState;
  });
  const {enabled} = useSelector((state: reduxState) => {
    return state.keyboard;
  });
  const updateGuess = (value: string) => {
    if (!enabled) return;
    if (currentLine > config.BOARD_MAX_ROWS - 1) return;
    dispatch(setGameplayAlert(''));

    if (value == 'DEL') {
      dispatch(setGuess(guess.slice(0, guess.length - 1)));
      return;
    }

    if (value == 'Enter') {
      if (guess.length == config.WORD_MAX_LETTERS) {
        if (
          !wordList.find(w => {
            return w == guess;
          })
        ) {
          dispatch(setGameplayAlert('Not a valid word.'));
          return;
        }

        dispatch(submitLine());

        const [correct_letters, incorrect_letters] = evaluateKeyboardColoring(
          guess,
          secret,
        );

        dispatch(
          updateKeyboardLetters({
            correct: correct_letters,
            incorrect: incorrect_letters,
          }),
        );
        const won = guess == secret;
        if (won) {
          dispatch(endGame());
          dispatch(disableKeyboard());
        }
        if (currentLine == config.BOARD_MAX_ROWS - 1) {
          dispatch(endGame());
          if (!won) {
            dispatch(setGameplayAlert('The correct word was: ' + secret));
          }
        }
        return;
      }
      dispatch(setGameplayAlert('Not enough letters entered.'));
      return;
    }
    if (guess.length == config.WORD_MAX_LETTERS) return;
    else {
      dispatch(setGuess(guess + value));
    }
  };

  /* useMemo doesnt update the updateGuess function passed
   to onPressIn so its always the function from the first render and 
   the state variables inside of updateGuess dont get updated,
   so we use a ref and update the function thats inside useMemo */

  const mutableUpdateGuess = useRef((value: string) => {});
  mutableUpdateGuess.current = updateGuess;
  return useMemo(() => {
    return (
      <View style={styles.keyboardContainer}>
        {f.map((t, i) => {
          if (i == f.length - 1) {
            return (
              <View key={i} style={styles.keyboardRowContainer}>
                <Key value="Enter" updateGuess={mutableUpdateGuess} />
                <KeyboardRow format={t} updateGuess={mutableUpdateGuess} />
                <Key value="DEL" updateGuess={mutableUpdateGuess} />
              </View>
            );
          } else {
            return (
              <KeyboardRow
                key={i}
                format={t}
                updateGuess={mutableUpdateGuess}
              />
            );
          }
        })}
      </View>
    );
  }, []);
};
