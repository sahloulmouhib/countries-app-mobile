import { useState } from 'react';

import { searchAndPaginateData } from '_utils/helpers';

interface UseFetchPaginatedLocalType<D = any, T = any> {
  dataInput: D[];
  decodeData: (value: D[]) => T[];
  filter?: string;
  filterBy?: string;
  rowsPerPage?: number;
}

const useFetchPaginatedCountryLocal = <D = any, T = any>(
  config: UseFetchPaginatedLocalType<D, T>,
) => {
  const DEFAULT_PAGE_NUMBER = 1;
  const DEFAULT_ROWS_PER_PAGE = 10;
  const SLEEP_TIME = 100;
  const {
    dataInput,
    decodeData,
    filter,
    filterBy,
    rowsPerPage = DEFAULT_ROWS_PER_PAGE,
  } = config;

  const DECODED_DATA = decodeData(dataInput);
  const [data, setData] = useState<T[]>([]);
  const [resultsCount, setResultsCount] = useState<number | undefined>(
    undefined,
  );
  let hasLoadedAll = data.length === resultsCount;
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE_NUMBER);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchData = (page: number) => {
    const res = searchAndPaginateData(
      DECODED_DATA,
      page,
      filter,
      filterBy,
      rowsPerPage,
    );
    return res;
  };

  const getDataOnMount = async () => {
    try {
      setIsLoading(true);
      const res = fetchData(DEFAULT_PAGE_NUMBER);
      await sleep(SLEEP_TIME);
      setCurrentPage(DEFAULT_PAGE_NUMBER);
      setData(res.data);
      setResultsCount(res.total);
    } catch (err: any) {
    } finally {
      setIsLoading(false);
    }
  };

  const getMoreData = async () => {
    try {
      setIsLoadingMore(true);
      const res = fetchData(currentPage + 1);
      await sleep(SLEEP_TIME);
      setData([...data, ...res.data]);
      setCurrentPage(currentPage + 1);
    } catch (err: any) {
    } finally {
      setIsLoadingMore(false);
    }
  };

  const getRefreshedData = async () => {
    try {
      setIsRefreshing(true);
      const res = fetchData(DEFAULT_PAGE_NUMBER);
      await sleep(SLEEP_TIME);
      setData(res.data);
      setCurrentPage(DEFAULT_PAGE_NUMBER);
      setResultsCount(res.total);
    } catch (err: any) {
    } finally {
      setIsRefreshing(false);
    }
  };

  return {
    isLoading,
    isRefreshing,
    failedError: undefined,
    data,
    resultsCount,
    currentPage,
    isLoadingMore,
    loadingMoreError: undefined,
    refreshError: undefined,
    getDataOnMount,
    getMoreData,
    getRefreshedData,
    setData,
    setResultsCount,
    hasLoadedAll,
  };
};

export default useFetchPaginatedCountryLocal;
