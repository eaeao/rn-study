/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useCallback} from 'react';
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
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const onPress = useCallback(e => {
      setLeft(left + 1);
  },[left]);

  const minus = useCallback(e => {
      setRight(right + 1);
  }, [right]);

  return (
    <View style={styles.view}>
      <View style={styles.contents}>
        <Text style={styles.text}>{left}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contents}>
        <Text style={styles.text}>{right}</Text>
        <TouchableOpacity onPress={minus}>
          <Text style={styles.btn}>+</Text>
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
    flexDirection: 'row',
  },
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: 'red',
    fontSize: 20,
  },

});

export default App;
