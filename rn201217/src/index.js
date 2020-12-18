import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home'
import CounterScreen from './screens/counter'


import { Provider } from 'react-redux';
import stores from './stores';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={stores}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} options={{ title: '카운터' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};


export default App;
