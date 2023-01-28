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
    '0': string;
    '1': string;
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
  name: string;
  capital: string;
  image: string;
}

export const decodeCountry = (data: ICountryResponse): ICountry => {
  return {
    name: data.name.common,
    capital: data.capital?.length > 0 ? data.capital[0] : '-',
    image: data.flags['1'],
  };
};

export const decodeCountries = (data: ICountryResponse[]): ICountry[] => {
  return sortCountriesAlphabetically(
    data.map(country => decodeCountry(country)),
  );
};

export const sortCountriesAlphabetically = (countries: ICountry[]) => {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
};
