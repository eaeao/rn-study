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
  const [primeCount, setPrimeNumber] = useState(0)

  const onSum = useCallback((e) => {
    setCount(count + 1)
  })
  const onClear = useCallback((e) => {
    setCount(0)
    setPrimeNumber(0)
  })
  useEffect(() => {
    setCount((prev) => {

      let arr = [];
      for (let i = 1; i <= prev; i++) {
        arr.push(i);
      }
      for (let i = 1; i * i < prev; i++) {
        if (arr[i]) {
          let num = arr[i]
          for (let j = num * num; j <= prev; j += num) {
            arr[j - 1] = 0;
          }
        }
      }
      let answer = arr.filter((number) => number);
      answer.shift();
      setPrimeNumber(answer.length)
      return prev;
    })
  }, [count])

  return (
    <View style={styles.body}>
      <View style={styles.countWrapper}>
        <Text style={styles.footer}>{`Count : ${count}`}</Text>
        <Text style={styles.footer}>{`Prime Count : ${primeCount}`}</Text>
      </View>
      <View style={styles.countWrapper}>
      <TouchableOpacity onPress={onSum}>
          <Text style={styles.btnSumText}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClear}>
          <Text style={styles.btnClearText}>
            clear
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  btnSumText: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'green',
  },
  btnClearText: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'gray',

  },
  countNumber: {
    fontSize: 50
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center'
  },
  countWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default App;
