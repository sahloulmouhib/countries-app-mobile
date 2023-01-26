import { useEffect, useRef, useState } from 'react';

import { all } from 'axios';

import { HttpMethod } from '_utils/types';

import { handleError, sendAsyncRequest } from '../helpers';
import { UseFetchPaginatedType } from '../types';

const TODOS_LIST = [
  {
    id: 1,
    title: 'Todo 1',
    description: 'Todo 1 description',
  },
  {
    id: 2,
    title: 'Todo 2',
    description: 'Todo 2 description',
  },
  {
    id: 3,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 4,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 5,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 6,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 7,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 300,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 301,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 8,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 9,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 10,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 35000,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 11,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 12,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 13,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 14,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 15,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 16,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 17,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 18,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 19,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 20,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 21,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
  {
    id: 22,
    title: 'Todo 3',
    description: 'Todo 3 description',
  },
];

const useFetchPaginatedLocal = <D = any, T = any>(
  config: UseFetchPaginatedType<D, T>,
) => {
  const { decodeData, url, dataRequestParams, useToken = true } = config;

  const DEFAULT_PAGE_NUMBER = 1;

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
    const res = await sendAsyncRequest<D>({
      method: HttpMethod.Get,
      url: url,
      params: { page: page, ...dataRequestParams },
      useToken: useToken,
      abortController: abortController,
    });
    return res.data;
  };

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const getDataOnMount = async () => {
    try {
      setIsLoading(true);
      if (failedError !== undefined) {
        setFailedError(undefined);
      }
      getDataOnMountAbortControllerRef.current = new AbortController();
      // const res = await fetchData(
      //   DEFAULT_PAGE_NUMBER,
      //   getDataOnMountAbortControllerRef.current,
      // );
      await await sleep(3000);
      setAllData(decodeData(TODOS_LIST));
      setData(decodeData(allData.slice(0, 10)));
      setCurrentPage(DEFAULT_PAGE_NUMBER);
      setResultsCount(TODOS_LIST.length);
    } catch (err: any) {
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
      // const res = await fetchData(
      //   currentPage + 1,
      //   getMoreAbortControllerRef.current,
      // );
      await sleep(3000);
      setCurrentPage(currentPage + 1);
      setData([
        ...data,
        ...decodeData(
          allData.slice(currentPage * 10, (currentPage + 1) * 10 + 10),
        ),
      ]);
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
      // const res = await fetchData(
      //   DEFAULT_PAGE_NUMBER,
      //   getRefreshedDataAbortControllerRef.current,
      // );
      await sleep(3000);
      setCurrentPage(DEFAULT_PAGE_NUMBER);
      setAllData(decodeData(TODOS_LIST));
      setData(decodeData(allData.slice(0, 10)));
      setResultsCount(TODOS_LIST.length);
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
