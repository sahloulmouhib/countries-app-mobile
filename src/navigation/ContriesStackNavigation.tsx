import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchCountries from '_screens/SearchCountries/SearchCountries';

import {
  SEARCH_COUNTRIES_SCREEN,
  COUNTRY_DETAILS_SCREEN,
} from '_utils/screenNames';

export type CountriesStackParamList = {
  [SEARCH_COUNTRIES_SCREEN]: undefined;
  [COUNTRY_DETAILS_SCREEN]: undefined;
};

const CountriesStack = createNativeStackNavigator<CountriesStackParamList>();

const CountriesStackNavigation = () => {
  return (
    <CountriesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CountriesStack.Screen
        name={SEARCH_COUNTRIES_SCREEN}
        component={SearchCountries}
      />
      <CountriesStack.Screen
        name={COUNTRY_DETAILS_SCREEN}
        component={SearchCountries}
      />
    </CountriesStack.Navigator>
  );
};

export default CountriesStackNavigation;
