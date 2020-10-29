import React from 'react';
import {StyleSheet, View} from 'react-native';
import Randomcolor from './randomcolor';

const Randomindex: () => React$Node = () => {
  return (
    <View style={[styles.contents]}>
      <Randomcolor />
      <Randomcolor />
      <Randomcolor />
      <Randomcolor />
      <Randomcolor />
      <Randomcolor />
      <Randomcolor />
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  btn: {
    backgroundColor: 'powderblue',
    fontSize: 50,
    margin: 5,
  },
});
export default Randomindex;
