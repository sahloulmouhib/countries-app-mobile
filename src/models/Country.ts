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
  id: string;
  name: string;
  capital: string;
  flag: string;
  continents: string;
  area: number;
  population: number;
  languages: string;
  currencies: string;
}

export const decodeCountry = (data: ICountryResponse): ICountry => {
  return {
    id: data.cca3,
    name: data.name.common,
    capital: data.capital?.length > 0 ? data.capital[0] : '-',
    //1 png, 0 svg
    flag: data.flags['1'],
    continents: data.continents.join(', '),
    area: data.area,
    population: data.population,
    languages: getLanguages(data.languages),
    currencies: getCurrencies(data.currencies),
  };
};

export const decodeCountries = (data: ICountryResponse[]): ICountry[] => {
  return sortCountriesAlphabetically(
    data.map(country => {
      console.log(decodeCountry(country));
      return decodeCountry(country);
    }),
  );
};

export const sortCountriesAlphabetically = (countries: ICountry[]) => {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
};

export const getLanguages = (data: { [key: string]: string }) => {
  let languages = [];
  for (let key in data) {
    languages.push(data[key] + ' ');
  }
  return languages.join(', ');
};

export const getCurrencies = (data: { [key: string]: any }) => {
  let currencies = [];
  for (let key in data) {
    currencies.push(data[key].name + ' ');
  }
  return currencies.join(',');
};
