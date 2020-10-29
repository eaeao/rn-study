import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


const Color: () => React$Node = (props) => {
  const { index } = props;
  const [ colors, setColors ] = useState([0,0,0])
  const toneUp = useCallback((e) => {
    setColors((colors) =>{
        let _color= [...colors];
        _color[index] = _color[index] + 10;
        setColors([..._color])

    } )
  })
  const toneDown = useCallback((e) => {
    setColors((colors) =>{
        let _color= [...colors];
        _color[index] = _color[index] - 10;
        setColors([..._color])

    } )
  })
  useEffect(() => {
    console.log(colors)
  }, [colors])

  return (
    <View style={[
      styles.container,
      {backgroundColor: `rgb(${colors})`},
    ]}>
      <View style={styles.countWrapper}>
        <Text>{colors}</Text>
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

export default Color;
