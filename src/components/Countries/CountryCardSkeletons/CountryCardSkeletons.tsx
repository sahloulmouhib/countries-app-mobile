import React from 'react';
import { View } from 'react-native';

import { DEFAULT_ROWS_PER_PAGE } from '_utils/constants';

import CountryCardSkeleton from '../CountryCardSkeleton/CountryCardSkeleton';

import styles from './CountryCardSkeletons.styles';

type Props = {
  numberOfCards?: number;
};

const CountryCardSkeletons = ({ numberOfCards }: Props) => {
  return (
    <View style={styles.container}>
      {Array.from(Array(numberOfCards ?? DEFAULT_ROWS_PER_PAGE).keys()).map(
        (_, index) => (
          <CountryCardSkeleton key={index} />
        ),
      )}
    </View>
  );
};

export default CountryCardSkeletons;
