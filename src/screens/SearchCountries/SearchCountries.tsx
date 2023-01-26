import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomFlatlist from '_components/common/CustomFlatList/CustomFlatlist';

import useFetchPaginatedLocal from '_api/hooks/useFetchPaginatedLocal';

import { colors } from '_utils/theme/colors';

type Props = {};

const SearchCountries = (props: Props) => {
  const {
    data,
    failedError,
    isLoading,
    isLoadingMore,
    loadingMoreError,
    getDataOnMount,
    getMoreData,
    getRefreshedData,
    resultsCount,
    refreshError,
    isRefreshing,
    hasLoadedAll,
  } = useFetchPaginatedLocal({
    url: 'https://restcountries.eu/rest/v2/all',
    decodeData: (value: any) => value,
  });

  console.log('data length', data.length);
  console.log('resultsCount', resultsCount);
  console.log(data.length === resultsCount);

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ height: 200 }}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };

  useEffect(() => {
    getDataOnMount();
  }, []);
  return (
    <View style={styles.container}>
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
        keyExtractor={(item: any) => item.id.toString()}
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
