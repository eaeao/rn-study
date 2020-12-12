/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {counter} from '../stores/actions';
import Color from '../screens/Color.js';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(counter.countUp(1))}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(counter.countDown(1))}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  btn: {
    backgroundColor: '#ccc',
    padding: 10,
    margin: 10,
  },
});

export default Counter;
