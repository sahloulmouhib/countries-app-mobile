import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlagQuiz from '_screens/Country/FlagQuiz/FlagQuiz';

import { navigationRef } from '_navigation/RootNavigation';

import CountryStackNavigation from './CountryStackNavigation';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home2" component={FlagQuiz} />
        <Stack.Screen
          name="SearchCountries"
          component={CountryStackNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
