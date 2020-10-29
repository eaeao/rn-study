import React from 'react';
import { StyleSheet, View} from 'react-native';
import Color from './color';


const Index: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Color index={0}/>
      <Color index={1}/>
      <Color index={2}/>
      <Color index={3}/>
      <Color index={4}/>
      <Color index={5}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: `100%`,
    height: `100%`,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Index;
