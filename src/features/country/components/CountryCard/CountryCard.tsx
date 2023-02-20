import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image2';

import { ICountry } from '_features/country/models/Country';

import CustomTitle, {
  CustomTitleType,
} from '_components/CustomTitle/CustomTitle';

import { icons } from '_utils/icons';

import styles from './CountryCard.styles';

type Props = {
  country: ICountry;
  onPress: () => void;
};

const CountryCard = ({ country, onPress }: Props) => {
  const { name, capital, flagImage } = country;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FastImage
        style={styles.flagImage}
        source={{ uri: flagImage }}
        resizeMode="cover"
        defaultSource={icons.PLACEHOLDER_IMAGE}
      />
      <View style={styles.detailsContainer}>
        <CustomTitle title={name} type={CustomTitleType.H2} />
        <CustomTitle title={capital} type={CustomTitleType.H4} />
      </View>
    </TouchableOpacity>
  );
};

export default CountryCard;
