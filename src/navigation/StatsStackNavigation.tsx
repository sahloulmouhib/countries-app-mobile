import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PopulationStats from '_screens/stats/PopulationStats/PopulationStats';
import Stats from '_screens/stats/Stats/Stats';

import { POPULATION_STATS_SCREEN, STATS_SCREEN } from '_utils/screenNames';

export type StatsStackParamList = {
  [STATS_SCREEN]: undefined;
  [POPULATION_STATS_SCREEN]: undefined;
};

const StatsStack = createNativeStackNavigator<StatsStackParamList>();

const StatsTabNavigation = () => {
  return (
    <StatsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StatsStack.Screen name={STATS_SCREEN} component={Stats} />
      <StatsStack.Screen
        name={POPULATION_STATS_SCREEN}
        component={PopulationStats}
      />
    </StatsStack.Navigator>
  );
};

export default StatsTabNavigation;
