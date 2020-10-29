/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect,useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
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
  const[colorCode, setColorCode] = useState(0);

  const onPressPlus = useCallback((e) => {
    if(colorCode <= 255) setColorCode(colorCode + 10);
  }, [colorCode]);

  const onPressMinus = useCallback((e) => {
    if(colorCode > 0) setColorCode(colorCode - 10);   
  }, [colorCode]);

  return (
    <>
      <SafeAreaView>
          <View style={styles.container} backgroundColor={`rgb(${colorCode},${colorCode},0)`}>
            <View style={styles.content}>
            <TouchableOpacity onPress={onPressPlus}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressMinus}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            </View>

          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    fontSize: 20,
  },

  btnText: {
    fontSize: 20,
    backgroundColor: 'green',
    padding: 10,
  }
});

export default App;
