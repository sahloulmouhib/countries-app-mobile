import { ICountry } from '_models/Country';

import { setIconsToContinents } from '_utils/helpers';

import CONTINENTS_DATA from './continents.json';
import COUNTRIES_DATA from './countriesV2.json';

export const COUNTRIES = COUNTRIES_DATA as unknown as ICountry[];

export const CONTINENTS = setIconsToContinents(CONTINENTS_DATA);
