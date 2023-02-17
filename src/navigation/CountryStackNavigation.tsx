import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TempScreen from '_screens/TempScreen/TempScreen';
import CountryDetails from '_screens/country/CountryDetails/CountryDetails';
import SearchCountries from '_screens/country/SearchCountries/SearchCountries';

import { ICountry } from '_features/country/models/Country';

import {
  SEARCH_COUNTRIES_SCREEN,
  COUNTRY_DETAILS_SCREEN,
} from '_utils/screenNames';

export type CountryStackParamList = {
  [SEARCH_COUNTRIES_SCREEN]: undefined;
  [COUNTRY_DETAILS_SCREEN]: { country: ICountry };
};

const CountryStack = createNativeStackNavigator<CountryStackParamList>();

const CountryStackNavigation = () => {
  return (
    <CountryStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CountryStack.Screen
        name={SEARCH_COUNTRIES_SCREEN}
        component={TempScreen}
      />
      <CountryStack.Screen
        name={COUNTRY_DETAILS_SCREEN}
        component={CountryDetails}
      />
    </CountryStack.Navigator>
  );
};

export default CountryStackNavigation;
