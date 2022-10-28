import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';

const BoardLetter: React.FC<{
  guess: string;
  status: string | undefined;
  colored: boolean;
}> = ({guess, status, colored}) => {
  return useMemo(() => {
    return (
      <View
        style={[
          styles.boardLetterContainer,
          colored
            ? [
                styles.coloredBoardRowLetterContainer,
                {
                  backgroundColor:
                    status == 'LETTER_MISPLACED'
                      ? 'orange'
                      : status == 'LETTER_CORRECT'
                      ? 'green'
                      : 'rgb(70,70,70)',
                },
              ]
            : {},
        ]}>
        <Text style={styles.boardLetterText}>{guess?.toUpperCase()}</Text>
      </View>
    );
  }, [guess, status, colored]);
};
export default BoardLetter;
