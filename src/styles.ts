import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {width: '100%', height: '100%', backgroundColor: 'black'},
  boardContainer: {
    marginVertical: 50,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  boardRowContainer: {
    flexDirection: 'row',
  },
  coloredBoardRowLetterContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  boardLetterContainer: {
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'whitesmoke',
    borderTopWidth: 1,
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderLeftColor: 'whitesmoke',
    borderLeftWidth: 1,
    borderRightColor: 'whitesmoke',
    borderRightWidth: 1,
    margin: 3,
    backgroundColor: 'black',
  },
  boardLetterText: {
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'RobotoSlab-Bold',
  },
  boardLetterTextCorrect: {
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
  },

  keyboardKeyContainer: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    minWidth: 35,
    minHeight: 50,
    margin: 2,
    justifyContent: 'center',
    backgroundColor: 'rgb(120,120,120)',
  },
  keyboardKeyContainerCorrect: {
    backgroundColor: 'green',
  },
  keyboardKeyContainerIncorrect: {
    backgroundColor: 'rgb(50,50,50)',
  },
  keyboardKeyText: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  keyboardContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 40,
  },
  keyboardRowContainer: {
    display: 'flex',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alertText: {
    fontSize: 16,
    fontFamily: 'RobotoSlab',
    color: 'white',
    position: 'relative',
    top: -30,
    paddingVertical: 0,
  },
  alertContainer: {
    alignItems: 'center',
  },
});
