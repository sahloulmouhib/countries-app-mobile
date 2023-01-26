import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import CustomTitle, {
  CustomTitleType,
} from '_components/common/CustomTitle/CustomTitle';

import { ICountry } from '_models/Country';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 32,
  },
  flagImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  detailsContainer: {
    marginLeft: 16,
  },
});
