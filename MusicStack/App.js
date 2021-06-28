/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import MusicDetail from './src/screens/MusicDetail';

import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Songs">
        <Stack.Screen
          name="Songs"
          component={Home}
          options={{
            title: 'Songs',
            headerStyle: {
              backgroundColor: '#1a98e8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {
              left: 4,
            },
          }}
        />
        <Stack.Screen
          name="Music Details"
          component={MusicDetail}
          options={{
            title: 'Music Details',
            headerStyle: {
              backgroundColor: '#1a98e8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {
              left: 4,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
