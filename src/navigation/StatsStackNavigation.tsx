import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CountryDetails from '_screens/country/CountryDetails/CountryDetails';
import AreaAndPopulationStats from '_screens/stats/AreaAndPopulationStats/AreaAndPopulationStats';
import Stats from '_screens/stats/Stats/Stats';

import { StatsType } from '_features/stats/utils/types';

import { ICountry } from '_models/Country';

import {
  COUNTRY_DETAILS_SCREEN,
  AREA_AND_POPULATION_STATS_SCREEN,
  STATS_SCREEN,
} from '_utils/screenNames';

export type StatsStackParamList = {
  [STATS_SCREEN]: undefined;
  [AREA_AND_POPULATION_STATS_SCREEN]: {
    type: StatsType;
  };
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
        name={AREA_AND_POPULATION_STATS_SCREEN}
        component={AreaAndPopulationStats}
      />
      <StatsStack.Screen
        name={COUNTRY_DETAILS_SCREEN}
        component={CountryDetails}
      />
    </StatsStack.Navigator>
  );
};

export default StatsTabNavigation;
