import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from '_navigation/RootNavigation';

import BottomTabNavigation from './BottomTabNavigation/BottomTabNavigation';

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
