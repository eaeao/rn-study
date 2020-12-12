/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import stores from './stores';
import Counter from './screens/Counter';
import ColorIndex from './screens/index';
import ColorComponent from './screens/ColorComponent';
import Color from './screens/index';

const Index = () => {
  return (
    // <Provider store={stores}>
    //   <Counter />
    // </Provider>
    //   <ColorIndex />
    // <Provider store={stores}>
    //   <ColorComponent />
    // </Provider>
    <Provider store={stores}>
      <Color />
    </Provider>
  );
};

export default Index;
