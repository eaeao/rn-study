import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';
import {redsaturation} from '../stores/actions';

function RedScreen() {
  const hslsturation = useSelector((state) => state.redcolorcount);
  const dispatch = useDispatch();

  const onPressPlus = (n) => {
    const copy = [...hslsturation];
    if (n === 10 ? copy[1] < 100 : copy[1] > 0) {
      dispatch(redsaturation.redcount(copy, n));
    }
    console.log('hslsturation : ', hslsturation);
  };
  return (
    <View
      style={[
        styles.contents,
        {
          backgroundColor: `hsl(${hslsturation[0]}, ${hslsturation[1]}%, ${
            hslsturation[1] / 2
          }%)`,
        },
      ]}>
      <Text style={styles.text}>{hslsturation[1]}</Text>
      <View style={styles.btns}>
        <TouchableOpacity onPress={() => onPressPlus(10)}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressPlus(-10)}>
          <Text style={styles.btn}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function RGBCounterScreen({route, navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Red" component={RedScreen} />
      <Tab.Screen name="Green" component={SettingsScreen} />
      <Tab.Screen name="Blue" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  contents: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  btn: {
    backgroundColor: 'powderblue',
    fontSize: 50,
    margin: 5,
  },
  btns: {
    flexDirection: 'row',
  },
});
