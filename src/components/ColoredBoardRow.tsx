import React, {useEffect, useMemo, useRef} from 'react';
import {Animated} from 'react-native';
import {useSelector} from 'react-redux';
import BoardLetter from './BoardLetter';
import {evaluateBoardColoring} from '../utils/evaluateColoring';
import {styles} from '../styles';

export const ColoredBoardRow: React.FC<{guess: string}> = ({guess}) => {
  const {secret} = useSelector((state: any) => state.gameState);

  const rotAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  const rotateData = rotAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return useMemo(() => {
    const colors = evaluateBoardColoring(guess, secret);
    return (
      <Animated.View
        style={[
          styles.boardRowContainer,
          {transform: [{rotateX: rotateData}]},
        ]}>
        {Object.values(guess).map((g, i) => {
          return (
            <BoardLetter colored={true} key={i} guess={g} status={colors[i]} />
          );
        })}
      </Animated.View>
    );
  }, [guess]);
};
