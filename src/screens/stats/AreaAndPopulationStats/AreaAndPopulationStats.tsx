import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CountryCardSkeletons from '_features/country/components/CountryCardSkeletons/CountryCardSkeletons';
import AreaPopulationStatCard from '_features/stats/components/AreAndPopulationStatCard/AreaAndPopulationStatCard';
import {
  COUNTRIES_SORTED_BY_AREA,
  COUNTRIES_SORTED_BY_POPULATION,
} from '_features/stats/utils/constants';
import { StatsType } from '_features/stats/utils/types';

import CustomDivider from '_components/CustomDivider/CustomDivider';
import CustomFlatlist from '_components/CustomFlatList/CustomFlatlist';
import CustomScreenHeader from '_components/CustomScreenHeader/CustomScreenHeader';
import CustomSearchBar from '_components/CustomSearchBar/CustomSearchBar';

import { StatsStackParamList } from '_navigation/StatsStackNavigation';

import useDebounceText from '_hooks/useDebounceText';
import useFetchPaginatedCountryLocal from '_hooks/useFetchPaginatedCountryLocal';

import { ICountry } from '_models/Country';

import { DEBOUNCE_TIME, DEFAULT_SPACING_BIG } from '_utils/constants';
import {
  COUNTRY_DETAILS_SCREEN,
  AREA_AND_POPULATION_STATS_SCREEN,
} from '_utils/screenNames';

import { strings } from '_i18n';

import styles from './AreaAndPopulationStats.styles';

type Props = NativeStackScreenProps<
  StatsStackParamList,
  typeof AREA_AND_POPULATION_STATS_SCREEN
>;

const SCREEN_DETAILS = {
  [StatsType.Area]: {
    countries: COUNTRIES_SORTED_BY_AREA,
    screenTitle: strings('stats.area.title'),
  },
  [StatsType.Population]: {
    countries: COUNTRIES_SORTED_BY_POPULATION,
    screenTitle: strings('stats.population.title'),
  },
};

const AreaAndPopulationStats = ({ navigation, route }: Props) => {
  const { type } = route.params;
  const { countries, screenTitle } = SCREEN_DETAILS[type];
  const goBack = () => navigation.goBack();

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
  } = useFetchPaginatedCountryLocal(countries, {
    filter: searchText,
    filterBy: 'name',
  });

  const renderItem = ({ item }: { item: ICountry }) => {
    const onPress = () => {
      navigation.navigate(COUNTRY_DETAILS_SCREEN, { country: item });
    };
    return (
      <AreaPopulationStatCard country={item} onPress={onPress} type={type} />
    );
  };

  useEffect(() => {
    setData([]);
    getDataOnMount();
  }, [debouncedSearchTerm]);

  return (
    <View style={styles.container}>
      <CustomScreenHeader title={screenTitle} onBackPress={goBack} />
      <CustomDivider height={DEFAULT_SPACING_BIG} />
      <CustomSearchBar
        text={searchText}
        onChangeText={setSearchText}
        placeholder={strings('labels.search_country_placeholder')}
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

export default AreaAndPopulationStats;
