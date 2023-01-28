import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import CountryCard from '_components/Countries/CountryCard/CountryCard';
import CountryCardSkeletons from '_components/Countries/CountryCardSkeletons/CountryCardSkeletons';
import CustomFlatlist from '_components/common/CustomFlatList/CustomFlatlist';
import CustomSearchBar from '_components/common/CustomSearchBar/CustomSearchBar';

import { endpoints } from '_api/endpoints';
import useFetchPaginatedCountry from '_api/hooks/useFetchPaginatedCountry';

import useDebounceText from '_hooks/useDebounceText';

import { decodeCountries, ICountry } from '_models/Country';

import { DEBOUNCE_TIME } from '_utils/constants';

import { strings } from '_i18n';

import styles from './SearchCountries.styles';

const SearchCountries = () => {
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
  } = useFetchPaginatedCountry({
    url:
      searchText.length > 0
        ? endpoints.COUNTRIES_BY_NAME(searchText)
        : endpoints.COUNTRIES,
    decodeData: decodeCountries,
  });

  const renderItem = ({ item }: { item: ICountry }) => {
    return <CountryCard country={item} />;
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
        placeholder={strings('countries.search_countries.placeholder')}
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
        renderLoader={<CountryCardSkeletons numberOfCards={10} />}
        keyExtractor={(item: ICountry) => item.image}
      />
    </View>
  );
};

export default SearchCountries;
