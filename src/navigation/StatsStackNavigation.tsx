import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Stats from '_screens/stats/Stats/Stats';

import { STATS_SCREEN } from '_utils/screenNames';

export type StatsStackParamList = {
  [STATS_SCREEN]: undefined;
};

const StatsStack = createNativeStackNavigator<StatsStackParamList>();

const StatsTabNavigation = () => {
  return (
    <StatsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StatsStack.Screen name={STATS_SCREEN} component={Stats} />
    </StatsStack.Navigator>
  );
};

export default StatsTabNavigation;
