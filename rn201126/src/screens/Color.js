import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const Color: (props) => React$Node = (props) => {
  const {hue, index, setSelectedIndex, selected} = props;
  const [colors, setColors] = useState(hue);

  const onPressChoice = (e) => {
    console.log('index : ', index);
    if (selected) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <Pressable
      style={[
        styles.contents,
        {
          backgroundColor: `hsl(${colors[0]}, ${colors[1]}%, ${
            colors[1] / 2
          }%)`,
        },
        {
          borderWidth: selected ? 3 : 0,
        },
      ]}
      onPress={() => onPressChoice()}>
      <Text style={[styles.container]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contents: {
    width: '100%',
    height: 50,
  },
  container: {
    height: 50,
  },
});
export default Color;
