import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {
  const onPressButton = () => {
    navigation.navigate('Counter', [60, 100]);
  };
  const onPressButtonRGB = () => {
    navigation.navigate('RGBColor');
  };
  const onPressRGBHome = () => {
    navigation.navigate('RGBHomeTab');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Home Screen</Text>
      <TouchableOpacity onPress={onPressButton}>
        <Text>Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressButtonRGB}>
        <Text>RGBCounter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRGBHome}>
        <Text>RGB TAB</Text>
      </TouchableOpacity>
    </View>
  );
}
