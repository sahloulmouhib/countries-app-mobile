import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CountryCardSkeletons from '_features/country/components/CountryCardSkeletons/CountryCardSkeletons';
import { sortCountriesAlphabetically } from '_features/country/utils/helpers';

import CountryCard from '_components/CountryCard/CountryCard';
import CustomFlatlist from '_components/CustomFlatList/CustomFlatlist';
import CustomSearchBar from '_components/CustomSearchBar/CustomSearchBar';

import { CountryStackParamList } from '_navigation/BottomTabNavigation/CountryStackNavigation/CountryStackNavigation';

import useDebounceText from '_hooks/useDebounceText';
import useFetchPaginatedCountryLocal from '_hooks/useFetchPaginatedCountryLocal';

import { ICountry } from '_models/Country';

import { COUNTRIES } from '_data/countries-data';

import { DEBOUNCE_TIME } from '_utils/constants';
import {
  COUNTRY_DETAILS_SCREEN,
  SEARCH_COUNTRIES_SCREEN,
} from '_utils/screenNames';

import { strings } from '_i18n';

import styles from './SearchCountriesScreen.styles';

type Props = NativeStackScreenProps<
  CountryStackParamList,
  typeof SEARCH_COUNTRIES_SCREEN
>;

const COUNTRIES_SORTED_ALPHABETICALLY = sortCountriesAlphabetically(COUNTRIES);
const SearchCountries = ({ navigation }: Props) => {
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
  } = useFetchPaginatedCountryLocal(COUNTRIES_SORTED_ALPHABETICALLY, {
    filter: searchText,
    filterBy: 'name',
  });

  const renderItem = ({ item }: { item: ICountry }) => {
    const onPress = () => {
      navigation.navigate(COUNTRY_DETAILS_SCREEN, { country: item });
    };
    return <CountryCard country={item} onPress={onPress} />;
  };

  useEffect(() => {
    setData([]);
    getDataOnMount();
  }, [debouncedSearchTerm]);

  return (
    <View style={styles.container}>
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

export default SearchCountries;
