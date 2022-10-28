/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/state/store';
import Bordle from './src/components/Bordle';

const App = () => {
  return (
    <Provider store={store}>
      <Bordle />
    </Provider>
  );
};

export default App;
