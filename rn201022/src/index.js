import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Color from './color';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Index: () => React$Node = () => {
  const [colors, setColors] = useState([
    [0, 100, 50],
    [30, 100, 50],
    [60, 100, 50],
    [120, 100, 50],
    [210, 100, 50],
    [250, 100, 50],
    [270, 100, 50],
  ]);
  const [choiceBorder, setChoiceBorder] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [which, setWhich] = useState(9);

  const onPresstest = (n) => {
    const borderArr = [0, 0, 0, 0, 0, 0, 0];
    if (choiceBorder[n] !== 5) {
      borderArr[n] = 5;
      setWhich(n);
    } else {
      setWhich(9);
    }
    setChoiceBorder(borderArr);
  };

  const onPressPlus = (n) => {
    const copys = [...colors];
    if (which >= 0 && which <= 6) {
      if (copys[which][1] < 100) {
        copys[which][1] = copys[which][1] + n;
        copys[which][2] = copys[which][2] + n / 2;
      }
      console.log(copys);
      setColors(copys);
    }
  };

  const onPressMinus = (n) => {
    const copys = colors.slice();
    if (which >= 0 && which <= 6) {
      if (copys[which][1] > 0) {
        copys[which][1] = copys[which][1] + n;
        copys[which][2] = copys[which][2] + n / 2;
      }
      console.log(copys);
      setColors(copys);
    }
  };

  return (
    <View style={[styles.contents]}>
      <Pressable
        style={[styles.contents, {borderWidth: choiceBorder[0]}]}
        onPress={() => onPresstest(0)}>
        <Color a={colors[0]} />
      </Pressable>
      <Pressable
        style={[styles.contents, {borderWidth: choiceBorder[1]}]}
        onPress={() => onPresstest(1)}>
        <Color a={colors[1]} />
      </Pressable>
      <Pressable
        style={[styles.contents, {borderWidth: choiceBorder[2]}]}
        onPress={() => onPresstest(2)}>
        <Color a={colors[2]} />
      </Pressable>
      <Pressable
        style={[styles.contents, {borderWidth: choiceBorder[3]}]}
        onPress={() => onPresstest(3)}>
        <Color a={colors[3]} />
      </Pressable>
      <Pressable
        style={[styles.contents, {borderWidth: choiceBorder[4]}]}
        onPress={() => onPresstest(4)}>
        <Color a={colors[4]} />
      </Pressable>
      <Pressable
        style={[styles.contents, {borderWidth: choiceBorder[5]}]}
        onPress={() => onPresstest(5)}>
        <Color a={colors[5]} />
      </Pressable>
      <Pressable
        style={[styles.contents, {borderWidth: choiceBorder[6]}]}
        onPress={() => onPresstest(6)}>
        <Color a={colors[6]} />
      </Pressable>
      <View style={styles.btns}>
        <TouchableOpacity onPress={() => onPressPlus(10)}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressMinus(-10)}>
          <Text style={styles.btn}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'chocolate',
  },
  btns: {
    position: 'absolute',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: 'powderblue',
    fontSize: 50,
    margin: 5,
  },
});
export default Index;
