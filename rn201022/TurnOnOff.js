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

  const [toneColor, setToneColor] = useState(255)
  const toneUp = useCallback((e) => {
    setToneColor((toneColor) => toneColor+10)
  })
  const toneDown = useCallback((e) => {
    setToneColor((toneColor) => toneColor-10)
  })
  useEffect(() => {
    console.log(typeof(toneColor))
  }, [toneColor])

  return (
    <View style={{
      backgroundColor: `rgb(${toneColor},${toneColor},0)`,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    }}>
      <View style={styles.countWrapper}>
        <Text>{toneColor}</Text>
        <TouchableOpacity onPress={toneUp}>
          <Text style={styles.btnSumText}>
            Tone Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toneDown}>
          <Text style={styles.btnClearText}>
            Tone Down
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
    flexDirection: 'row',
  },
  btnSumText: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'yellow',
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
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default App;
