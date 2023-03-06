import { ICountry } from '_models/Country';

import COUNTRIES_DATA from './countriesV2.json';

export const COUNTRIES = COUNTRIES_DATA as unknown as ICountry[];
