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
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const onLeft = useCallback((e) => {
    setLeft(left + 1)
    console.log(e)
  }, [left])

  const onRight = useCallback((e) => {
    setRight(right + 1)
    console.log(e)
  }, [right])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.countNumber}>{left}</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity onPress={onLeft}>
            <Text style={styles.btnSumText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.countNumber}>{right}</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity onPress={onRight}>
            <Text style={styles.btnSumText}>+</Text>
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
    alignItems: 'center',
    flexDirection:'row'
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default App;
