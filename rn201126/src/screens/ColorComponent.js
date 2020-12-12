import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {saturation} from '../stores/actions';

const ColorComponent: (props) => React$Node = (props) => {
  const [colors, setColors] = useState([0]);
  const hslsturation = useSelector((state) => state.colorcount);
  const dispatch = useDispatch();

  const onPressPlus = (n) => {
    if (n === 10 ? hslsturation < 100 : hslsturation > 0) {
      dispatch(saturation.countUp(n));
    }
    console.log('count : ', hslsturation);
    console.log('hslsturation : ', hslsturation[0][1]);
  };

  console.log('hslsturation : ', hslsturation);

  return (
    <Pressable
      style={[
        styles.contents,
        {
          backgroundColor: `hsl(${colors[0]}, ${hslsturation[0][1]}%, ${
            hslsturation[0][1] / 2
          }%)`,
        },
      ]}>
      <Text style={[styles.container]} />
      <View style={styles.btns}>
        <Pressable onPress={() => onPressPlus(10)}>
          <Text style={styles.btn}>+</Text>
        </Pressable>
        <Pressable onPress={() => onPressPlus(-10)}>
          <Text style={styles.btn}>-</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contents: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 50,
  },
  btn: {
    backgroundColor: 'powderblue',
    fontSize: 50,
    margin: 5,
  },
  btns: {
    position: 'absolute',
    flexDirection: 'row',
  },
});
export default ColorComponent;
