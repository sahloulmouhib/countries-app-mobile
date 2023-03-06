import { ICountry } from '_models/Country';

import { COUNTRIES } from '_data/countries-data';

import { colors } from '_utils/theme/colors';
import { fonts } from '_utils/theme/fonts';

export const sortCountriesByField = (field: keyof ICountry, limit?: number) => {
  let countries = [];

  countries = COUNTRIES.sort(
    (a, b) => (b[field] as number) - (a[field] as number),
  );

  countries.forEach((country, index) => {
    country.ranking = index + 1;
  });
  if (limit) {
    return countries.slice(0, limit);
  }
  return countries;
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

//TODO: fix countries count
export const getContinentsCount = () => {
  let data: {
    continentName: string;
    countriesCount: number;
  }[] = [];
  COUNTRIES.forEach(country => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].continentName === country.continents[0]) {
        data[i].countriesCount++;
        return true;
      }
    }
    data.push({
      continentName: country.continents[0],
      countriesCount: 1,
    });
    return true;
  });
  data.sort((a, b) => b.countriesCount - a.countriesCount);
  return data;
};

export const getContinentsDataAndLabelsForBarChart = () => {
  const data = getContinentsCount();
  const labels = data.map(item => item.continentName);
  const values = data.map(item => item.countriesCount);
  return { labels, data: values };
};

export const getContinentsDataForPieChart = () => {
  const data = getContinentsCount();
  return data.map(item => ({
    name: item.continentName,
    countriesCount: item.countriesCount,
    color: getRandomColor(),
    legendFontColor: colors.GREY_MEDIUM,
    legendFontSize: 12,
    legendFontFamily: fonts.MEDIUM,
  }));
};
