import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Color from './color';


const Index: () => React$Node = () => {
  const [saturation, setSaturation] = useState([100, 100, 100, 100, 100, 100, 100])
  const [selectedItem, setSelectedItem] = useState(0)
  const onPress = useCallback((n, index) => {
    let _saturation = [...saturation];
    _saturation[index] = _saturation[index] + n;
    if (_saturation[index] > 0 && _saturation[index] < 100) {
      setSaturation(_saturation);
    }
    else {
      setSaturation(saturation);
    }
  })
  const onSelect = useCallback((n) => {
    setSelectedItem(n)
    console.log(n)
  })

  // useEffect(()=>{
  //   console.log(saturation)
  // })

  return (
    <View style={styles.container}>
      {[0, 30, 60, 120, 210, 240, 270].map((n, index) => 
      <TouchableOpacity key={n} style={styles.btnWrapper} onPress={() => onSelect(index)}>
      <Color key={n} hue={n} saturation={saturation[index]}  />
      </TouchableOpacity>
      )}
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlayBtn} onPress={() => onPress(10, selectedItem)}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.overlayBtn} onPress={() => onPress(-10, selectedItem)}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: `100%`,
    height: `100%`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: "absolute",
    flexDirection: "row"
  },
  overlayBtn: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10
  },
  btnWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
});

export default Index;
