/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


const App: () => React$Node = () => {
  const [count, setCount] = useState(0)

  const onSum = useCallback((e) => {
    setCount(count + 1)
    console.log(e)
  }, [count])

  const onSub = useCallback((e) => {
    setCount(count - 1)
    console.log(e)
  }, [count])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.countNumber}>{count}</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity onPress={onSum}>
            <Text style={styles.btnSumText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSub}>
            <Text style={styles.btnSubText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.countNumber}>{count}</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity onPress={onSum}>
            <Text style={styles.btnSumText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSub}>
            <Text style={styles.btnSubText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnSumText: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'green',
  },
  btnSubText: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'red',

  },
  countNumber: {
    fontSize: 50
  },
  btnWrapper: {
    flexDirection: 'row'
  }
});

export default App;
