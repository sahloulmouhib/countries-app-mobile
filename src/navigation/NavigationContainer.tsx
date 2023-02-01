import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TempScreen from '_screens/TempScreen/TempScreen';

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
        <Stack.Screen name="Home2" component={TempScreen} />
        <Stack.Screen
          name="SearchCountries"
          component={CountryStackNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
