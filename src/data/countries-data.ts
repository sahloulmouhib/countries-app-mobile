import { IContinent } from '_models/Continent';
import { ICountry } from '_models/Country';

import { icons } from '_utils/icons';

import CONTINENTS_DATA from './continents.json';
import COUNTRIES_DATA from './countriesV2.json';

export const COUNTRIES = COUNTRIES_DATA as unknown as ICountry[];

const getContinentIconName = (continentName: string) => {
  switch (continentName) {
    case 'Africa':
      return icons.AFRICA;
    case 'Asia':
      return icons.ASIA;
    case 'Europe':
      return icons.EUROPE;
    case 'North America':
      return icons.NORTH_AMERICA;
    case 'Oceania':
      return icons.OCEANIA;
    case 'South America':
      return icons.SOUTH_AMERICA;
    case 'Antarctica':
      return icons.ANTARCTICA;
    default:
      return icons.AFRICA;
  }
};
//TODO: fix countries count for each continent
const setIconsToContinents = () => {
  const continents = CONTINENTS_DATA;
  const newContinents = continents.map(continent => {
    return {
      ...continent,
      image: getContinentIconName(continent.name),
    };
  });

  return newContinents as unknown as IContinent[];
};

export const CONTINENTS = setIconsToContinents();
