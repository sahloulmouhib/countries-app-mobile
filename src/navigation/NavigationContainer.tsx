import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TempScreen from '_screens/TempScreen/TempScreen';

import { navigationRef } from '_navigation/RootNavigation';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TempScreen} />
        <Stack.Screen name="Home2" component={TempScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
