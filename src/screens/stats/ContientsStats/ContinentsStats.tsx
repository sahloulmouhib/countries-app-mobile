import React from 'react';
import { FlatList, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ContinentStatCard from '_features/stats/components/ContinentStatCard/ContinentStatCard';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomScreenHeader from '_components/CustomScreenHeader/CustomScreenHeader';

import { StatsStackParamList } from '_navigation/StatsStackNavigation';

import { IContinent } from '_models/Continent';

import { CONTINENTS } from '_data/countries-data';

import { DEFAULT_SPACING_BIG } from '_utils/constants';
import {
  CONTINENTS_STATS_SCREEN,
  COUNTRIES_BY_CONTINENT_SCREEN,
} from '_utils/screenNames';

import { strings } from '_i18n';

import styles from './ContinentsStats.styles';

type Props = NativeStackScreenProps<
  StatsStackParamList,
  typeof CONTINENTS_STATS_SCREEN
>;

const ContinentsStats = ({ navigation }: Props) => {
  const goBack = () => navigation.goBack();

  const renderItem = ({ item }: { item: IContinent }) => {
    const { name, count, image } = item;
    const onPress = () => {
      navigation.navigate(COUNTRIES_BY_CONTINENT_SCREEN, {
        continentName: name,
      });
    };
    return (
      <ContinentStatCard
        name={name}
        count={count}
        image={image}
        onPress={onPress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CustomScreenHeader
        title={strings('stats.continents.title')}
        onBackPress={goBack}
      />
      <CustomDivider height={DEFAULT_SPACING_BIG} />
      <FlatList data={CONTINENTS} renderItem={renderItem} />
    </View>
  );
};

export default ContinentsStats;
