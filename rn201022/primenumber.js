/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [count, setCount] = useState(0);
  const [prime, setPrime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((preCount) => preCount + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    let tf = false;
    if (count > 1) {
      for (let i = 2; i < count; i++) {
        if (count % i === 0) {
          console.log('소수가 아닙니다: ', count);
          tf = true;
        }
      }
      if (tf === false) {
        setPrime((prePrime) => prePrime + 1);
        console.log('소수입니다: ', count, prime);
      }
    }
  }, [count]);

  return (
      <View style={styles.view}>
        <Text style={styles.text}>{count}S</Text>
        <Text>{prime}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    backgroundColor: 'red',
  },
});

export default App;
