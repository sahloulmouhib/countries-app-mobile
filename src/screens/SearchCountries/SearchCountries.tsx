import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import CountryCard from '_components/Countries/CountryCard/CountryCard';
import CustomDivider from '_components/common/CustomDivider/CustomDivider';
import CustomFlatlist from '_components/common/CustomFlatList/CustomFlatlist';
import CustomSearchBar from '_components/common/CustomSearchBar/CustomSearchBar';

import { endpoints } from '_api/endpoints';
import useFetchPaginatedLocal from '_api/hooks/useFetchPaginatedLocal';

import { decodeCountries, ICountry } from '_models/Country';

import { colors } from '_utils/theme/colors';

type Props = {};

const SearchCountries = (props: Props) => {
  const [searchText, setSearchText] = useState('');

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
  } = useFetchPaginatedLocal({
    url: endpoints.COUNTRIES,
    decodeData: decodeCountries,
  });

  const renderItem = ({ item }: { item: ICountry }) => {
    return <CountryCard country={item} />;
  };

  useEffect(() => {
    getDataOnMount();
  }, []);
  return (
    <View style={styles.container}>
      <CustomSearchBar text={searchText} onChangeText={setSearchText} />
      <CustomDivider height={20} />
      <CustomFlatlist
        data={data}
        isLoading={isLoading}
        isRefreshing={isRefreshing}
        isLoadingMore={isLoadingMore}
        hasLoadedAll={hasLoadedAll}
        backgroundColor={data.length === 0 ? colors.WHITE : colors.GREY_LIGHT}
        hasPadding={false}
        getDataOnMount={getDataOnMount}
        getMoreData={getMoreData}
        getRefreshedData={getRefreshedData}
        loadingMoreError={loadingMoreError}
        failedError={failedError}
        refreshError={refreshError}
        renderItem={renderItem}
        keyExtractor={(item: ICountry) => item.image}
      />
    </View>
  );
};

export default SearchCountries;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
