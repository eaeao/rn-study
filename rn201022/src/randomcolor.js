import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Randomcolor: () => React$Node = () => {
  const randomNumber = Math.floor(Math.random() * 300) + 0;
  const [colors, setColors] = useState([randomNumber, 100, 50]);

  console.log('ranum : ', randomNumber);

  const onPressPlus = useCallback(
    (n) => {
      const copys = [...colors];
      if (copys[1] < 100) {
        copys[1] = copys[1] + n;
        copys[2] = copys[2] + n / 2;
      }
      setColors(copys);
    },
    [colors],
  );

  const onPressMinus = useCallback(
    (n) => {
      const copys = colors.slice();
      if (copys[1] > 0) {
        copys[1] = copys[1] - n;
        copys[2] = copys[2] - n / 2;
      }
      setColors(copys);
    },
    [colors],
  );

  return (
    <View
      style={[
        styles.contents,
        {
          backgroundColor: `hsl(${colors[0]}, ${colors[1] + '%'}, ${
            colors[2] + '%'
          })`,
        },
      ]}>
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
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: 'powderblue',
    fontSize: 50,
    margin: 5,
  },
});
export default Randomcolor;
