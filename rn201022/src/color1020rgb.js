import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Color: () => React$Node = (props) => {
  const {index} = props;
  const [colors, setColors] = useState([0, 0, 0]);

  const onPressPlus = useCallback(
    (n) => {
      const copys = [...colors];
      switch (index) {
        case 0:
          copys[0] < 255 ? (copys[0] = copys[0] + n) : null;
          break;
        case 1:
          copys[0] < 255 && copys[1] < 127
            ? ((copys[0] = copys[0] + n), (copys[1] = copys[1] + n / 2))
            : null;
          break;
        case 2:
          copys[0] < 255 && copys[1] < 255
            ? ((copys[0] = copys[0] + n), (copys[1] = copys[1] + n))
            : null;
          break;
        case 3:
          copys[1] < 255 ? (copys[1] = copys[1] + n) : null;
          break;
        case 4:
          copys[2] < 255 ? (copys[2] = copys[2] + n) : null;
          break;
        case 5:
          copys[2] < 135
            ? (copys[0] < 75 ? (copys[0] = copys[0] + n / 2) : null,
              (copys[2] = copys[2] + n))
            : null;
          break;
        case 6:
          copys[2] < 211
            ? (copys[0] < 148 ? (copys[0] = copys[0] + n) : null,
              (copys[2] = copys[2] + n))
            : null;
          break;
      }

      console.log('index :', index);
      setColors(copys);
      //console.log('colors[0]: ', colors[0], 'colors[1]: ', colors[1], 'colors[2]: ', colors[2], 'n: ', n,);
    },
    [colors],
  );

  const onPressMinus = useCallback(
    (n) => {
      const copys = colors.slice();
      switch (index) {
        case 0:
          copys[0] > 0 ? (copys[0] = copys[0] - n) : null;
          break;
        case 1:
          copys[0] > 0 && copys[1] > 0
            ? ((copys[0] = copys[0] - n), (copys[1] = copys[1] - n / 2))
            : console.log('');
          break;
        case 2:
          copys[0] > 0 && copys[1] > 0
            ? ((copys[0] = copys[0] - n), (copys[1] = copys[1] - n))
            : null;
          break;
        case 3:
          copys[1] > 0 ? (copys[1] = copys[1] - n) : null;
          break;
        case 4:
          copys[2] > 0 ? (copys[2] = copys[2] - n) : null;
          break;
        case 5:
          copys[2] > 0
            ? (copys[0] > 0 ? (copys[0] = copys[0] - n / 2) : null,
              (copys[2] = copys[2] - n))
            : null;
          break;
        case 6:
          copys[2] > 0
            ? (copys[0] > 0 ? (copys[0] = copys[0] - n) : null,
              (copys[2] = copys[2] - n))
            : null;
          break;
      }
      console.log('index :', index);
      setColors(copys);
      //console.log('colors[0]: ', colors[0], 'colors[0]: ', colors[1], 'colors[0]: ', colors[2], 'n: ', n,);
    },
    [colors],
  );
  return (
    <View
      style={[styles.contents, {backgroundColor: `rgb(${colors.join(',')})`}]}>
      <TouchableOpacity onPress={() => onPressPlus(10)}>
        <Text style={styles.btn}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressMinus(10)}>
        <Text style={styles.btn}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: 'powderblue',
    fontSize: 50,
    margin: 5,
  },
});
export default Color;
