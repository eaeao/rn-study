import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';

const Color: () => React$Node = (props) => {
  const {a} = props;
  const [colors, setColors] = useState(a);

  return (
    <View
      style={[
        styles.contents,
        {
          backgroundColor: `hsl(${colors[0]}, ${colors[1]}%, ${colors[2]}%)`,
        },
      ]}></View>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    width: '100%',
  },
});
export default Color;
