import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {BoardRow} from './BoardRow';
import {ColoredBoardRow} from './ColoredBoardRow';
import {styles} from '../styles';
import {config} from '../app.config';
import {reduxState} from '../types';

export const Board = () => {
  const {currentLine, history, guess} = useSelector(
    (state: reduxState) => state.board,
  );
  const {wordLength, stage} = useSelector(
    (state: reduxState) => state.gameState,
  );

  return useMemo(() => {
    const grid = new Array<Array<string>>(config.BOARD_MAX_ROWS);
    for (let i = 0; i < config.BOARD_MAX_ROWS; i++) {
      grid[i] = new Array(wordLength).fill('');
    }
    for (let i = 0; i < config.BOARD_MAX_ROWS; i++) {
      if (history[i]) {
        grid[i] = Object.values(history[i]);
      }
    }

    return (
      <View style={styles.boardContainer}>
        {grid.map((g: string[], i: number) => {
          if (i < currentLine) {
            return <ColoredBoardRow key={i} guess={g} />;
          } else if (i == currentLine) {
            return <BoardRow key={i} guess={Object.values(guess)} line={i} />;
          } else {
            return <BoardRow key={i} guess={g} line={i} />;
          }
        })}
      </View>
    );
  }, [currentLine, guess, stage]);
};
