import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function HomeScreen({navigation}) {
  const onPressButton = () => {
    navigation.navigate('Counter');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={onPressButton}>
        <Text>Counter</Text>
      </TouchableOpacity>
    </View>
  );
}
