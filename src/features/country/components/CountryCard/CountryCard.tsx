import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { ICountry } from '_features/country/models/Country';

import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import styles from './CountryCard.styles';

type Props = {
  country: ICountry;
  onPress: () => void;
};

const CountryCard = ({ country, onPress }: Props) => {
  const { name, capital, flag } = country;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.flagImage} source={{ uri: flag }} />
      <View style={styles.detailsContainer}>
        <CustomTitle title={name} type={CustomTitleType.H2} />
        <CustomTitle title={capital} type={CustomTitleType.H4} />
      </View>
    </TouchableOpacity>
  );
};

export default CountryCard;
