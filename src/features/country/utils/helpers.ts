import { Platform, Linking } from 'react-native';

import { strings } from '_i18n';

import { ICountry } from '../models/Country';

export const sortCountriesAlphabetically = (countries: ICountry[]) => {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
};

export const getLanguages = (data: string[]) => {
  return data.join(', ');
};

export const getCurrencies = (data: string[]) => {
  return data.join(',');
};

export const getContinents = (data: string[]) => {
  return data.join(',');
};

export const formatPopulation = (population: number): string => {
  switch (true) {
    case population >= 1000000000:
      return `${(population / 1000000000).toFixed(2)} ${strings(
        'country.country_details.metrics.population.billion',
      )}`;
    case population >= 1000000:
      return `${(population / 1000000).toFixed(2)} ${strings(
        'country.country_details.metrics.population.million',
      )}`;
    case population >= 100000:
      return `${(population / 1000).toFixed(0)} ${strings(
        'country.country_details.metrics.population.thousand',
      )}`;
    default:
      return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

export const formatArea = (area: number): string => {
  switch (true) {
    case area >= 1000000:
      return `${(area / 1000000).toFixed(2)} ${strings(
        'country.country_details.metrics.area.million_km',
      )}`;
    default:
      return `${area.toFixed(0)} ${strings(
        'country.country_details.metrics.area.km',
      )}`;
  }
};

export const openMap = async (lat: number, lng: number, label: string) => {
  try {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${lat},${lng}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    if (url) {
      await Linking.openURL(url);
    }
  } catch (e) {
    __DEV__ && console.log('error', e);
  }
};
