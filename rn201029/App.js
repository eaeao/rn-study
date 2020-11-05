/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Index from './src/index';
import FlatlistSelectable from './src/flatlist-selectable'

const App: () => React$Node = () => {
  return <Index />;
  // return <FlatlistSelectable />;
};

export default App;
