import {
  formatArea,
  formatPopulation,
  getLanguages,
  getCurrencies,
  sortCountriesAlphabetically,
} from '../utils/helpers';

import { getContinents } from './../utils/helpers';

export interface ICountryResponse {
  id: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  flagImage: string;
  flagEmoji: string;
  continents: string[];
  area: number;
  population: number;
  languages: string[];
  currencies: string[];
  timezones: string[];
  latlng: {
    lat: number;
    lng: number;
  };
}

export interface ICountry {
  id: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  flagImage: string;
  flagEmoji: string;
  continents: string;
  area: string;
  population: string;
  languages: string;
  currencies: string;
  timezones: string[];
  latlng: {
    lat: number;
    lng: number;
  };
}

export const decodeCountry = (data: ICountryResponse): ICountry => {
  return {
    id: data.id,
    name: data.name,
    capital: data.capital,
    region: data.region,
    subregion: data.subregion,
    flagImage: data.flagImage,
    flagEmoji: data.flagEmoji,
    continents: getContinents(data.continents),
    area: formatArea(data.area),
    population: formatPopulation(data.population),
    languages: getLanguages(data.languages),
    currencies: getCurrencies(data.currencies),
    timezones: data.timezones,
    latlng: {
      lat: data.latlng.lat,
      lng: data.latlng.lng,
    },
  };
};

export const decodeCountries = (data: ICountryResponse[]): ICountry[] => {
  const decodedCountries = sortCountriesAlphabetically(
    data.map(country => {
      return decodeCountry(country);
    }),
  );
  return decodedCountries;
};
