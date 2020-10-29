/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [red, setRed] = useState(200);
  const [green, setGreen] = useState(200);
  const [blue, setBlue] = useState(200);

  function redColorIncrement() {
    setRed(red + 10);
    console.log('function:', 'r: ', red, 'g: ', green, 'b: ', blue)
  }
  useEffect(() => console.log('outside:', 'r: ', red, 'g: ', green, 'b: ', blue),
    [red],
  );
  const onPress = useCallback(e => {
      if (red < 255 && green < 255) {
        console.log('comparison:', 'r: ', red, 'g: ', green, 'b: ', blue);
        redColorIncrement();
        //setRed(red + 10);
        //setRed((prevRed) => [...prevRed, ...(red + 10)]);
        setGreen(green + 10);
        if (red >= 250 && green >= 250) {
          setRed(255);
          setGreen(255);
        }
      }
      if (blue > 0) {
        setBlue(blue - 10);
        if (blue < 0) {
          setBlue(0);
        }
      }
      console.log('inside:', 'r: ', red, 'g: ', green, 'b: ', blue);
  },[blue, green, red]);

  const zero = useCallback(e => {
      if (red > 10 && green > 10) {
        setRed(red - 10);
        setGreen(green - 10);
        if (red < 0 && green < 0) {
          setRed(0);
          setGreen(0);
        }
      }
      if (blue > 0) {
        setBlue(blue - 10);
        if (blue < 0) {
          setBlue(0);
        }
      }
      console.log('red: ', red, 'green: ', green, 'blue: ', blue);
  }, [blue, green, red]);

  return (
    <View style={[styles.view, {backgroundColor: 'rgba('+red+', '+green+','+blue+',1)'}]}>
      <View style={[styles.contents]}>
        <Text style={styles.text}>r: {red} </Text>
        <Text style={styles.text}>g: {green} </Text>
        <Text style={styles.text}>b: {blue} </Text>
      </View>
      <View style={[styles.contents]}>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.btn]}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={zero}>
          <Text style={styles.btn}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    color: 'gray',
  },
  btn: {
    backgroundColor: 'powderblue',
    fontSize: 50,
    margin: 5,
  },

});

export default App;
