import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Provider} from 'react-redux';
import stores from './src/stores';

import HomeScreen from './src/screens/home';
import CounterScreen from './src/screens/counter';
import ColorScreen from './src/screens/color';
import RGBCounterScreen from './src/screens/rgbCounter';
import RGBHomeScreen from './src/screens/rgbHome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={stores}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Counter"
            component={CounterScreen}
            options={{title: '카운터'}}
          />
          <Stack.Screen
            name="Color"
            component={ColorScreen}
            options={{title: '컬러'}}
          />
          <Stack.Screen
            name="RGBColor"
            component={RGBCounterScreen}
            options={{title: 'RGB텝'}}
          />
          <Stack.Screen
            name="RGBHomeTab"
            component={RGBHomeScreen}
            options={{title: 'RGB홈텝'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
