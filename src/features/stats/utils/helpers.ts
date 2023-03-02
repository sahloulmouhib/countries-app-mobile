import { ICountryResponse } from '_features/country/models/Country';

import { COUNTRIES } from '_data/countries-data';

const sortCountriesByField = (limit: number, field: keyof ICountryResponse) => {
  if (limit)
    return COUNTRIES.sort(
      (a, b) => (b[field] as number) - (a[field] as number),
    ).slice(0, limit);
  return COUNTRIES.sort((a, b) => (b[field] as number) - (a[field] as number));
};
// get random color for pie chart
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getPopulationDataAndLabelsForBarChart = (limit: number) => {
  let labels: string[] = [];
  let data: number[] = [];
  const countries = sortCountriesByField(limit, 'population');
  countries.forEach(country => {
    labels.push(country.name);
    data.push(country.population / 1000000000);
  });
  return { labels, data };
};

export const getPopulationDataForPieChart = (limit: number) => {
  let data: Array<any> = [];
  const countries = sortCountriesByField(limit, 'population');
  countries.forEach(country => {
    data.push({
      name: country.name,
      population: country.population,
      color: getRandomColor(),
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    });
  });
  return data;
};

export const getAreaDataAndLabelsForBarChart = (limit: number) => {
  let labels: string[] = [];
  let data: number[] = [];
  const countries = sortCountriesByField(limit, 'area');
  countries.forEach(country => {
    labels.push(country.name);
    data.push(country.area / 100000);
  });
  return { labels, data };
};

export const getAreaDataForPieChart = (limit: number) => {
  let data: Array<any> = [];
  const countries = sortCountriesByField(limit, 'area');
  countries.forEach(country => {
    data.push({
      name: country.name,
      area: country.area,
      color: getRandomColor(),
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    });
  });
  return data;
};
