import { ImageSourcePropType } from 'react-native';

import { countryFlagsImages } from '_utils/countryFlagsImages';

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
  subregion?: string;
  flagImage: ImageSourcePropType;
  flagImageUrl: string;
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
  ranking?: number;
}

export const decodeCountry = (data: ICountryResponse): ICountry => {
  return {
    id: data.id,
    name: data.name,
    capital: data.capital,
    region: data.region,
    subregion: data.subregion,
    flagImage:
      countryFlagsImages[`${data.id}` as keyof typeof countryFlagsImages],
    flagImageUrl: data.flagImage,
    flagEmoji: data.flagEmoji,
    continents: data.continents,
    area: data.area,
    population: data.population,
    languages: data.languages,
    currencies: data.currencies,
    timezones: data.timezones,
    latlng: {
      lat: data.latlng.lat,
      lng: data.latlng.lng,
    },
  };
};

export const decodeCountries = (data: ICountryResponse[]): ICountry[] => {
  const decodedCountries = data.map(country => {
    return decodeCountry(country);
  });
  return decodedCountries;
};
