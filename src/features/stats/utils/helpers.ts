import { ICountry } from '_models/Country';

import { CONTINENTS, COUNTRIES } from '_data/countries-data';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

import { statsImages } from './icons';

/*********Common helpers */
export const sortCountriesByField = (field: keyof ICountry, limit?: number) => {
  let countries = [...COUNTRIES];

  countries.sort((a, b) => (b[field] as number) - (a[field] as number));

  const newCountries = countries.map((country, index) => {
    return {
      ...country,
      ranking: index + 1,
    };
  });

  if (limit) {
    return newCountries.slice(0, limit);
  }
  return newCountries;
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

export const getRankingImage = (ranking: number | undefined) => {
  if (!ranking) {
    return null;
  }
  switch (ranking) {
    case 1:
      return statsImages.FIRST_PRIZE;
    case 2:
      return statsImages.SECOND_PRIZE;
    case 3:
      return statsImages.THIRD_PRIZE;
    default:
      return null;
  }
};

//*********Population helpers */
export const getPopulationDataAndLabelsForBarChart = (limit: number) => {
  let labels: string[] = [];
  let data: number[] = [];
  const countries = sortCountriesByField('population', limit);
  countries.forEach(country => {
    labels.push(country.flagEmoji);
    data.push(country.population / 1000000);
  });
  return { labels, data };
};

export const getPopulationDataForPieChart = (limit: number) => {
  let data: Array<any> = [];
  const countries = sortCountriesByField('population', limit);
  countries.forEach(country => {
    data.push({
      name: country.name,
      population: country.population,
      color: getRandomColor(),
      legendFontColor: colors.GREY_MEDIUM,
      legendFontSize: 12,
      legendFontFamily: fonts.MEDIUM,
    });
  });
  return data;
};

//*********Area helpers */
export const getAreaDataAndLabelsForBarChart = (limit: number) => {
  let labels: string[] = [];
  let data: number[] = [];
  const countries = sortCountriesByField('area', limit);
  countries.forEach(country => {
    labels.push(country.flagEmoji);
    data.push(country.area / 100000);
  });
  return { labels, data };
};

export const getAreaDataForPieChart = (limit: number) => {
  let data: Array<any> = [];
  const countries = sortCountriesByField('area', limit);
  countries.forEach(country => {
    data.push({
      name: country.name,
      area: country.area,
      color: getRandomColor(),
      legendFontColor: colors.GREY_MEDIUM,
      legendFontSize: 12,
      legendFontFamily: fonts.MEDIUM,
    });
  });
  return data;
};

//*********Continents helpers *****/

export const getContinentsDataAndLabelsForBarChart = () => {
  const data = [...CONTINENTS];
  const labels = data.map(item => item.name);
  const values = data.map(item => item.count);
  return { labels, data: values };
};

export const getContinentsDataForPieChart = () => {
  const data = [...CONTINENTS];
  return data.map(item => ({
    name: item.name,
    count: item.count,
    color: getRandomColor(),
    legendFontColor: colors.GREY_MEDIUM,
    legendFontSize: 12,
    legendFontFamily: fonts.MEDIUM,
  }));
};
