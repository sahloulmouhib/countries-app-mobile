import { ImageSourcePropType } from 'react-native';

import { Continents } from '_utils/types';

export interface IContinent {
  name: Continents;
  count: number;
  image: ImageSourcePropType;
  ranking?: number;
}
