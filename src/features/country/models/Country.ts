import {
  formatArea,
  formatPopulation,
  getLanguages,
  getCurrencies,
  sortCountriesAlphabetically,
} from '../utils/helpers';

export interface ICountryResponse {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: any;
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: string;
  };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    [key: string]: number;
  };
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode?: {
    format: string;
    regex: string;
  };
}

export interface ICountry {
  id: string;
  name: string;
  capital: string;
  flag: string;
  continents: string;
  area: string;
  population: string;
  languages: string;
  currencies: string;
  flagSVG: string;
  latlng: {
    lat: number;
    lng: number;
  };
}

export const decodeCountry = (data: ICountryResponse): ICountry => {
  return {
    id: data.cca3,
    name: data.name.common,
    capital: data.capital?.length > 0 ? data.capital[0] : '-',
    flagSVG: data?.flags?.svg,
    flag: data?.flags?.png,
    continents: data.continents.join(', '),
    area: formatArea(data.area),
    population: formatPopulation(data.population),
    languages: getLanguages(data.languages),
    currencies: getCurrencies(data.currencies),
    latlng: {
      lat: data.latlng[0],
      lng: data.latlng[1],
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
