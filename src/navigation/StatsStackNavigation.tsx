import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CountryDetails from '_screens/country/CountryDetails/CountryDetails';
import PopulationStats from '_screens/stats/PopulationStats/PopulationStats';
import Stats from '_screens/stats/Stats/Stats';

import { ICountry } from '_models/Country';

import {
  COUNTRY_DETAILS_SCREEN,
  POPULATION_STATS_SCREEN,
  STATS_SCREEN,
} from '_utils/screenNames';

export type StatsStackParamList = {
  [STATS_SCREEN]: undefined;
  [POPULATION_STATS_SCREEN]: undefined;
  [COUNTRY_DETAILS_SCREEN]: { country: ICountry };
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
      <StatsStack.Screen
        name={COUNTRY_DETAILS_SCREEN}
        component={CountryDetails}
      />
    </StatsStack.Navigator>
  );
};

export default StatsTabNavigation;
