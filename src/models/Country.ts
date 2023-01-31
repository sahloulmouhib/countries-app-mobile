import { strings } from '_i18n';

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

export const sortCountriesAlphabetically = (countries: ICountry[]) => {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
};

const getLanguages = (data: { [key: string]: string }) => {
  let languages = [];
  for (let key in data) {
    languages.push(data[key] + ' ');
  }
  return languages.join(', ');
};

const getCurrencies = (data: { [key: string]: any }) => {
  let currencies = [];
  for (let key in data) {
    currencies.push(data[key].name + ' ');
  }
  return currencies.join(',');
};

const formatPopulation = (population: number): string => {
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

const formatArea = (area: number): string => {
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
