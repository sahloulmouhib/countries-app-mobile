import { useEffect, useRef, useState } from 'react';

import { HttpMethod } from '_utils/types';

import { handleError, sendAsyncRequest } from '../helpers';
import { UseFetchPaginatedType } from '../types';

const useFetchPaginatedLocal = <D = any, T = any>(
  config: UseFetchPaginatedType<D, T>,
) => {
  const { decodeData, url, dataRequestParams, useToken = true } = config;

  const DEFAULT_PAGE_NUMBER = 1;
  const DEFAULT_ROWS_PER_PAGE = 10;

  const [allData, setAllData] = useState<T[]>([]);
  const [data, setData] = useState<T[]>([]);
  const [resultsCount, setResultsCount] = useState<number | undefined>(
    undefined,
  );
  const hasLoadedAll = data.length === resultsCount;
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE_NUMBER);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const [failedError, setFailedError] = useState<string | undefined>(undefined);
  const [loadingMoreError, setLoadingMoreError] = useState<string | undefined>(
    undefined,
  );
  const [refreshError, setRefreshError] = useState<string | undefined>(
    undefined,
  );

  const getDataOnMountAbortControllerRef = useRef<AbortController | undefined>(
    undefined,
  );
  const getMoreAbortControllerRef = useRef<AbortController | undefined>(
    undefined,
  );
  const getRefreshedDataAbortControllerRef = useRef<
    AbortController | undefined
  >(undefined);

  const fetchData = async (page: number, abortController: AbortController) => {
    const res = await sendAsyncRequest<D[]>({
      method: HttpMethod.Get,
      url: url,
      params: { page: page, ...dataRequestParams },
      useToken: useToken,
      abortController: abortController,
    });
    return res.data;
  };

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const getDataOnMount = async () => {
    try {
      setIsLoading(true);
      if (failedError !== undefined) {
        setFailedError(undefined);
      }
      getDataOnMountAbortControllerRef.current = new AbortController();
      const res = await fetchData(
        DEFAULT_PAGE_NUMBER,
        getDataOnMountAbortControllerRef.current,
      );
      setAllData(decodeData(res));
      setData(allData.slice(0, DEFAULT_ROWS_PER_PAGE));
      setCurrentPage(DEFAULT_PAGE_NUMBER);
      setResultsCount(allData.length);
    } catch (err: any) {
      console.log('err', err);
      setFailedError(handleError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const getMoreData = async () => {
    try {
      setIsLoadingMore(true);
      if (loadingMoreError !== undefined) {
        setLoadingMoreError(undefined);
      }
      getMoreAbortControllerRef.current = new AbortController();
      await sleep(3000);

      setData([
        ...data,
        ...allData.slice(
          currentPage * DEFAULT_ROWS_PER_PAGE,
          (currentPage + 1) * DEFAULT_ROWS_PER_PAGE,
        ),
      ]);
      setCurrentPage(currentPage + 1);
    } catch (err: any) {
      setLoadingMoreError(handleError(err));
    } finally {
      setIsLoadingMore(false);
    }
  };

  const getRefreshedData = async () => {
    try {
      setIsRefreshing(true);
      if (refreshError !== undefined) {
        setRefreshError(undefined);
      }
      getRefreshedDataAbortControllerRef.current = new AbortController();
      const res = await fetchData(
        DEFAULT_PAGE_NUMBER,
        getRefreshedDataAbortControllerRef.current,
      );
      setCurrentPage(DEFAULT_PAGE_NUMBER);
      setAllData(decodeData(res));
      setData(allData.slice(0, DEFAULT_ROWS_PER_PAGE));
      setResultsCount(allData.length);
    } catch (err: any) {
      setRefreshError(handleError(err));
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    return () => {
      getDataOnMountAbortControllerRef.current?.abort();
      getMoreAbortControllerRef.current?.abort();
      getRefreshedDataAbortControllerRef.current?.abort();
    };
  }, []);

  return {
    isLoading,
    isRefreshing,
    failedError,
    data,
    resultsCount,
    currentPage,
    isLoadingMore,
    loadingMoreError,
    refreshError,
    getDataOnMount,
    getMoreData,
    getRefreshedData,
    setData,
    setResultsCount,
    hasLoadedAll,
  };
};

export default useFetchPaginatedLocal;
