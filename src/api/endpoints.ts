const BASE_URL = 'https://restcountries.com/v3';

export const endpoints = {
  COUNTRIES: `${BASE_URL}/all`,
  COUNTRIES_BY_NAME: (name: string) => `${BASE_URL}/name/${name}`,
};
