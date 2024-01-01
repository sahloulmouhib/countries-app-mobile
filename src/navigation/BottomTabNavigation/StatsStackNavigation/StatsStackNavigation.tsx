import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CountryDetailsScreen from '_screens/country/CountryDetailsScreen/CountryDetailsScreen';
import AreaAndPopulationStatsScreen from '_screens/stats/AreaAndPopulationStatsScreen/AreaAndPopulationStatsScreen';
import ContinentsStatsScreen from '_screens/stats/ContientsStatsScreen/ContinentsStats';
import CountriesByContinentScreen from '_screens/stats/CountriesByContinentScreen/CountriesByContinentScreen';
import StatsScreen from '_screens/stats/StatsScreen/StatsScreen';

import { StatsType } from '_features/stats/utils/enums';

import { ICountry } from '_models/Country';

import { Continents } from '_utils/enums';
import {
  COUNTRY_DETAILS_SCREEN,
  AREA_AND_POPULATION_STATS_SCREEN,
  STATS_SCREEN,
  CONTINENTS_STATS_SCREEN,
  COUNTRIES_BY_CONTINENT_SCREEN,
} from '_utils/screenNames';

export type StatsStackParamList = {
  [STATS_SCREEN]: undefined;
  [AREA_AND_POPULATION_STATS_SCREEN]: {
    type: StatsType;
  };
  [COUNTRIES_BY_CONTINENT_SCREEN]: {
    continentName: Continents;
  };
  [CONTINENTS_STATS_SCREEN]: undefined;
  [COUNTRY_DETAILS_SCREEN]: { country: ICountry };
};

const StatsStack = createNativeStackNavigator<StatsStackParamList>();

const StatsTabNavigation = () => {
  return (
    <StatsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StatsStack.Screen name={STATS_SCREEN} component={StatsScreen} />
      <StatsStack.Screen
        name={AREA_AND_POPULATION_STATS_SCREEN}
        component={AreaAndPopulationStatsScreen}
      />
      <StatsStack.Screen
        name={CONTINENTS_STATS_SCREEN}
        component={ContinentsStatsScreen}
      />
      <StatsStack.Screen
        name={COUNTRY_DETAILS_SCREEN}
        component={CountryDetailsScreen}
      />
      <StatsStack.Screen
        name={COUNTRIES_BY_CONTINENT_SCREEN}
        component={CountriesByContinentScreen}
      />
    </StatsStack.Navigator>
  );
};

export default StatsTabNavigation;
