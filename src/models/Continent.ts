import { ImageSourcePropType } from 'react-native';

export interface IContinent {
  name: string;
  count: number;
  image: ImageSourcePropType;
  ranking?: number;
}
