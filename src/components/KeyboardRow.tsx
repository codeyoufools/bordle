import React, {useMemo} from 'react';
import {View} from 'react-native';
import Key from './Key';
import {styles} from '../styles';

const KeyboardRow: React.FC<{format: string; updateGuess: any}> = ({
  format,
  updateGuess,
}) => {
  return useMemo(() => {
    return (
      <View style={styles.keyboardRowContainer}>
        {Object.values(format).map(l => {
          return <Key key={l} value={l} updateGuess={updateGuess} />;
        })}
      </View>
    );
  }, [updateGuess]);
};
export default KeyboardRow;
