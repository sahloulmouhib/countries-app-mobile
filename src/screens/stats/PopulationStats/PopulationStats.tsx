import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CountryCardSkeletons from '_features/country/components/CountryCardSkeletons/CountryCardSkeletons';
import useFetchPaginatedCountryLocal from '_features/country/hooks/useFetchPaginatedCountryLocal';
import PopulationStatCard from '_features/stats/components/PopulationStatCard/PopulationStatCard';
import { sortCountriesByField } from '_features/stats/utils/helpers';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomFlatlist from '_components/CustomFlatList/CustomFlatlist';
import CustomScreenHeader from '_components/CustomScreenHeader/CustomScreenHeader';
import CustomSearchBar from '_components/CustomSearchBar/CustomSearchBar';

import { StatsStackParamList } from '_navigation/StatsStackNavigation';

import useDebounceText from '_hooks/useDebounceText';

import { ICountry } from '_models/Country';

import { DEBOUNCE_TIME } from '_utils/constants';
import {
  COUNTRY_DETAILS_SCREEN,
  POPULATION_STATS_SCREEN,
} from '_utils/screenNames';

import { strings } from '_i18n';

import styles from './PopulationStats.styles';

type Props = NativeStackScreenProps<
  StatsStackParamList,
  typeof POPULATION_STATS_SCREEN
>;

const COUNTRIES_SORTED_BY_POPULATION = sortCountriesByField('population');
const PopulationStats = ({ navigation }: Props) => {
  const goBack = () => {
    navigation.goBack();
  };
  const [searchText, setSearchText] = useState('');
  const debouncedSearchTerm = useDebounceText(searchText, DEBOUNCE_TIME);
  const {
    data,
    failedError,
    isLoading,
    isLoadingMore,
    loadingMoreError,
    getDataOnMount,
    getMoreData,
    getRefreshedData,
    refreshError,
    isRefreshing,
    hasLoadedAll,
    setData,
  } = useFetchPaginatedCountryLocal(COUNTRIES_SORTED_BY_POPULATION, {
    filter: searchText,
    filterBy: 'name',
  });

  const renderItem = ({ item }: { item: ICountry }) => {
    const onPress = () => {
      navigation.navigate(COUNTRY_DETAILS_SCREEN, { country: item });
    };
    return <PopulationStatCard country={item} onPress={onPress} />;
  };

  useEffect(() => {
    setData([]);
    getDataOnMount();
  }, [debouncedSearchTerm]);

  return (
    <View style={styles.container}>
      <CustomScreenHeader
        title={strings('stats.population.title')}
        onBackPress={goBack}
      />
      <CustomDivider height={32} />
      <CustomSearchBar
        text={searchText}
        onChangeText={setSearchText}
        placeholder={strings('country.search_countries.placeholder')}
      />
      <CustomFlatlist
        data={data}
        isLoading={isLoading}
        isRefreshing={isRefreshing}
        isLoadingMore={isLoadingMore}
        hasLoadedAll={hasLoadedAll}
        hasPadding={false}
        getDataOnMount={getDataOnMount}
        getMoreData={getMoreData}
        getRefreshedData={getRefreshedData}
        loadingMoreError={loadingMoreError}
        failedError={failedError}
        refreshError={refreshError}
        renderItem={renderItem}
        renderLoader={<CountryCardSkeletons />}
        keyExtractor={(item: ICountry) => item.id}
      />
    </View>
  );
};

export default PopulationStats;
