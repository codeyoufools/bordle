import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {BoardRow} from './BoardRow';
import {ColoredBoardRow} from './ColoredBoardRow';
import {styles} from '../styles';

export const Board = () => {
  const {currentLine, history, guess} = useSelector(
    (state: any) => state.board,
  );

  return useMemo(() => {
    return (
      <View style={styles.boardContainer}>
        {history.map((g: any, i: number) => {
          if (i < currentLine) {
            return <ColoredBoardRow key={i} guess={g} />;
          } else if (i == currentLine) {
            return <BoardRow key={i} guess={guess} line={i} />;
          } else {
            return <BoardRow key={i} guess={g} line={i} />;
          }
        })}
      </View>
    );
  }, [currentLine, guess]);
};
