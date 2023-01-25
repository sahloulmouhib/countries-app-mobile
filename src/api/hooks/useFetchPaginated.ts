import { useEffect, useRef, useState } from 'react';

import PaginatedResponse from '_models/responses/PaginatedResponse';

import { handleError } from '_utils/network';

import { HttpMethod } from '_enums/global';

import { sendAsyncRequest } from '../helpers';
import { UseFetchPaginatedType } from '../types';

const useFetchPaginated = <D = any, T = any>(
  config: UseFetchPaginatedType<D, T>,
) => {
  const {
    decodeData,
    url,
    dataRequestParams,
    useToken = true,
    useDataWrapper = true,
  } = config;

  const DEFAULT_PAGE_NUMBER = 1;

  const [data, setData] = useState<T[]>([]);
  const [resultsCount, setResultsCount] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE_NUMBER);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const [failedError, setFailedError] = useState<string | null>(null);
  const [loadingMoreError, setLoadingMoreError] = useState<string | null>(null);
  const [refreshError, setRefreshError] = useState<string | null>(null);

  const getDataOnMountAbortControllerRef = useRef<AbortController | null>(null);
  const getMoreAbortControllerRef = useRef<AbortController | null>(null);
  const getRefreshedDataAbortControllerRef = useRef<AbortController | null>(
    null,
  );

  const fetchData = async (page: number, abortController: AbortController) => {
    if (!useDataWrapper) {
      const res = await sendAsyncRequest<PaginatedResponse<D>>({
        method: HttpMethod.Get,
        url: url,
        params: { page: page, ...dataRequestParams },
        useToken: useToken,
        abortController: abortController,
      });
      return res.data;
    } else {
      const res = await sendAsyncRequest<{ data: PaginatedResponse<D> }>({
        method: HttpMethod.Get,
        url: url,
        params: { page: page, ...dataRequestParams },
        useToken: useToken,
        abortController: abortController,
      });
      return res.data.data;
    }
  };

  const getDataOnMount = async () => {
    try {
      setIsLoading(true);
      if (failedError !== null) {
        setFailedError(null);
      }
      getDataOnMountAbortControllerRef.current = new AbortController();
      const res = await fetchData(
        DEFAULT_PAGE_NUMBER,
        getDataOnMountAbortControllerRef.current,
      );
      setData(decodeData(res.data));
      setCurrentPage(DEFAULT_PAGE_NUMBER);
      setResultsCount(res.total);
    } catch (err: any) {
      setFailedError(handleError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const getMoreData = async () => {
    try {
      setIsLoadingMore(true);
      if (loadingMoreError !== null) {
        setLoadingMoreError(null);
      }
      getMoreAbortControllerRef.current = new AbortController();
      const res = await fetchData(
        currentPage + 1,
        getMoreAbortControllerRef.current,
      );

      setCurrentPage(currentPage + 1);
      setData([...data, ...decodeData(res.data)]);
    } catch (err: any) {
      setLoadingMoreError(handleError(err));
    } finally {
      setIsLoadingMore(false);
    }
  };

  const getRefreshedData = async () => {
    try {
      setIsRefreshing(true);
      if (refreshError !== null) {
        setRefreshError(null);
      }
      getRefreshedDataAbortControllerRef.current = new AbortController();
      const res = await fetchData(
        DEFAULT_PAGE_NUMBER,
        getRefreshedDataAbortControllerRef.current,
      );
      setCurrentPage(DEFAULT_PAGE_NUMBER);
      setData(decodeData(res.data));
      setResultsCount(res.total);
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
  };
};

export default useFetchPaginated;
