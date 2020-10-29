/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

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
  const [green, setGreen] = useState('');
  const [blue, setBlue] = useState([]);



  useEffect(() => {
    const response = axios.get(
        //'http://api.openweathermap.org/data/2.5/weather?q=Gimpo-si,kr&APPID=2d6c9e6d971fecc69724211129d8ef54&units=metric')
        'https://jsonplaceholder.typicode.com/users')
      .catch(function (error) {
        console.log(error);
      })
      .then((test) => {
        //console.log(test);
        setBlue(test);
        console.log('from now blue')
      });
  }, []);

  //console.log(blue.data)
  //console.log(blue.data.main.temp.toFixed(1));
  const test2 = [1,2,3,4,5];
  console.log(test2[0], test2[1])


  return (
    <View style={[styles.view]}>
      <View style={[styles.contents]}>
        <Text style={styles.text}>{red}</Text>
        <Text style={styles.text}>{test2}</Text>
      </View>
      <View style={[styles.contents]} />
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
    color: 'white',
  },
  btn: {
    backgroundColor: 'powderblue',
    fontSize: 50,
    margin: 5,
  },
});

export default App;
