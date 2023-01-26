import React from 'react';
import { Image, View } from 'react-native';

import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import { ICountry } from '_models/Country';

import styles from './CountryCard.styles';

type Props = {
  country: ICountry;
};

const CountryCard = ({ country }: Props) => {
  const { name, capital, image } = country;
  return (
    <View style={styles.container}>
      <Image style={styles.flagImage} source={{ uri: image }} />
      <View style={styles.detailsContainer}>
        <CustomTitle title={name} type={CustomTitleType.H2} />
        <CustomTitle title={capital} type={CustomTitleType.H4} />
      </View>
    </View>
  );
};

export default CountryCard;
