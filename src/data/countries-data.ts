import {
  decodeCountries,
  ICountryResponse,
} from '_features/country/models/Country';

import COUNTRIES_DATA from './countriesV2.json';

export const COUNTRIES = COUNTRIES_DATA as unknown as ICountryResponse[];
export const DECODED_COUNTRIES = decodeCountries(COUNTRIES);
