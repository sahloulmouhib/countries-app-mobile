import React from 'react';
import { View } from 'react-native';

import CountryCardSkeleton from '../CountryCardSkeleton/CountryCardSkeleton';

import styles from './CountryCardSkeletons.styles';

type Props = {
  numberOfCards: number;
};

const CountryCardSkeletons = ({ numberOfCards }: Props) => {
  return (
    <View style={styles.container}>
      {Array.from(Array(numberOfCards).keys()).map((_, index) => (
        <CountryCardSkeleton key={index} />
      ))}
    </View>
  );
};

export default CountryCardSkeletons;
