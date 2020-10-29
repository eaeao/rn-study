/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
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

  const onPress = useCallback(e => {

      setCount(count + 1, console.log('setCount실행 count: ', count));
  },[count]);

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

  const zero = useCallback(e => {
      setPrime(0);
      setCount(0);
  }, [prime]);

  return (
    <View style={styles.view}>
      <View style={styles.contents}>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{prime}</Text>
        <TouchableOpacity onPress={zero}>
          <Text style={styles.btn}>clear</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
  },
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: 'red',
    fontSize: 20,
  },

});

export default App;
