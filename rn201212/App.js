import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import HomeScreen from './src/screens/home';
import CounterScreen from './src/screens/counter';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homer">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Counter"
          component={CounterScreen}
          options={{
            title: '카운터',
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
