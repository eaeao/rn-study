import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  const onPressButton = () => {
    navigation.navigate('Counter');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={onPressButton}
        style={{backgroundColor: '#ccc', padding: 10, marginTop: 30}}>
        <Text>Counter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
