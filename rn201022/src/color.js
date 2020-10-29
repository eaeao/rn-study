import React, { useCallback,  useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';


const Color: () => React$Node = (props) => {
  const { hue,saturation } = props;
  return (
    <View style={[
      styles.container,
      {backgroundColor: `hsl(${hue}, ${saturation}%, ${saturation/2}%)`},
    ]}>
      <View style={styles.countWrapper}>
       
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
