import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
    const onPress = () => {
        navigation.navigate("Counter")
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={{marginTop: 10, padding:10, backgroundColor:`gray`}} onPress={onPress}>
            <Text>Counter</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export default HomeScreen;