import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import {useSelector} from 'react-redux';
import {reduxState} from '../types';
export const AlertBox: React.FC<{}> = () => {
  const {gameplayAlert} = useSelector((state: reduxState) => state.gameState);

  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertText}>{gameplayAlert}</Text>
    </View>
  );
};
