/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Screens/HomeScreen';
import { GISWebScreen } from './src/Screens/GISWebScreen'
import { GISScreen } from './src/Screens/GISScreen';
// import { TestMap } from './src/Screens/TestMap';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Qatar Web GIS" component={GISWebScreen} />
        <Stack.Screen name="Qatar GIS" component={GISScreen} />
        {/* <Stack.Screen name='Map' component={TestMap} /> */}
      </Stack.Navigator>
      { }
    </NavigationContainer>
  );
};

export default App;
