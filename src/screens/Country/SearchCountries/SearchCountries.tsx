import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CountryCard from '_components/Country/CountryCard/CountryCard';
import CountryCardSkeletons from '_components/Country/CountryCardSkeletons/CountryCardSkeletons';
import CustomFlatlist from '_components/common/CustomFlatList/CustomFlatlist';
import CustomSearchBar from '_components/common/CustomSearchBar/CustomSearchBar';

import { CountryStackParamList } from '_navigation/CountryStackNavigation';

import useFetchPaginatedCountryLocal from '_hooks/country/useFetchPaginatedCountryLocal';
import useDebounceText from '_hooks/useDebounceText';

import { decodeCountries, ICountry, ICountryResponse } from '_models/Country';

import { DEBOUNCE_TIME } from '_utils/constants';
import {
  COUNTRY_DETAILS_SCREEN,
  SEARCH_COUNTRIES_SCREEN,
} from '_utils/screenNames';

import { strings } from '_i18n';

import countries from '../../../db/countries.json';

import styles from './SearchCountries.styles';

type Props = NativeStackScreenProps<
  CountryStackParamList,
  typeof SEARCH_COUNTRIES_SCREEN
>;
const COUNTRIES = countries as unknown as ICountryResponse[];
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
  } = useFetchPaginatedCountryLocal<ICountryResponse, ICountry>({
    dataInput: COUNTRIES,
    decodeData: decodeCountries,
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

export default SearchCountries;
