import React, {useMemo, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';
import {useSelector} from 'react-redux';
import BoardLetter from './BoardLetter';
import {styles} from '../styles';
import {reduxState} from '../types';
import {config} from '../app.config';
export const BoardRow: React.FC<{guess: string[]; line: number}> = ({
  guess,
  line,
}) => {
  const currentLine = useSelector(
    (state: reduxState) => state.board.currentLine,
  );
  const {stage, wordLength} = useSelector(
    (state: reduxState) => state.gameState,
  );
  const error = useSelector(
    (state: reduxState) => state.gameState.gameplayAlert,
  );
  const [anim, setAnim] = useState(false);
  const xval = useRef(new Animated.Value(0)).current;
  if (line == currentLine && error.length > 0) {
    if (!anim) setAnim(true);
    Animated.sequence([
      Animated.timing(xval, {
        toValue: -1,
        duration: 25,
        useNativeDriver: true,
        easing: Easing.out(Easing.linear),
      }),
      Animated.timing(xval, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
        easing: Easing.out(Easing.linear),
      }),
      Animated.timing(xval, {
        toValue: 0,
        duration: 25,
        easing: Easing.out(Easing.linear),
        useNativeDriver: true,
      }),
      Animated.timing(xval, {
        toValue: -1,
        duration: 25,
        useNativeDriver: true,
        easing: Easing.out(Easing.linear),
      }),
      Animated.timing(xval, {
        toValue: 0,
        duration: 25,
        useNativeDriver: true,
        easing: Easing.out(Easing.linear),
      }),
    ]).start();
  }

  return useMemo(() => {
    const part = Object.values(guess);
    guess = new Array(wordLength).fill('');
    part.map((l, i) => (guess[i] = l));
    return (
      <Animated.View
        style={[
          styles.boardRowContainer,
          anim
            ? {
                transform: [
                  {
                    translateX: xval.interpolate({
                      inputRange: [-1, 1],
                      outputRange: [-10, 10], // 0 : 150, 0.5 : 75, 1 : 0
                    }),
                  },
                ],
              }
            : {},
        ]}>
        {guess.map((g, i) => {
          return (
            <BoardLetter key={i} colored={false} guess={g} status={undefined} />
          );
        })}
      </Animated.View>
    );
  }, [guess, anim, stage]);
};
