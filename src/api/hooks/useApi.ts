import { useEffect, useRef, useState } from 'react';

import { sendAsyncRequest } from '../helpers';
import { UseApiOptionsType, UseApiType } from '../types';

export const useApi = <D = any, T = any>(
  config: Omit<UseApiType<D, T>, 'abortController'>,
  options?: UseApiOptionsType<D, T>,
) => {
  let {
    method,
    url,
    payload,
    params,
    decodeData,
    headers,
    useToken,
    transformReq,
    timeout,
  } = config;
  const {
    onSuccess,
    onFailedError,
    onSettled,
    initialData = null,
    onRefreshError,
    onRefreshSuccess,
    onRefreshSettled,
  } = options || {};

  const [data, setData] = useState<T | null>(initialData);

  const [failedError, setFailedError] = useState<any>(null);
  const [refreshError, setRefreshError] = useState<any>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);
  const refreshAbortControllerRef = useRef<AbortController | null>(null);

  const makeRequest = async <F>(abortController: AbortController) => {
    return await sendAsyncRequest<F>({
      method: method,
      url: url,
      payload: payload,
      params: params,
      useToken: useToken,
      headers: headers,
      abortController: abortController,
      transformReq: transformReq,
      timeout: timeout,
    });
  };

  const apiCall = async () => {
    setIsLoading(true);
    if (failedError) setFailedError(null);
    try {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      let result = await makeRequest<D>(abortControllerRef.current);
      onSuccess && onSuccess(result);
      setData(decodeData(result.data));
    } catch (err: any) {
      setFailedError(err);
      onFailedError && onFailedError(err);
    } finally {
      setIsLoading(false);
      onSettled && onSettled();
    }
  };

  const refreshApiCall = async () => {
    setIsRefreshing(true);
    if (refreshError) setRefreshError(null);
    try {
      refreshAbortControllerRef.current?.abort();
      refreshAbortControllerRef.current = new AbortController();

      let result = await makeRequest<D>(refreshAbortControllerRef.current);
      onRefreshSuccess && onRefreshSuccess(result);
      setData(decodeData(result.data));
    } catch (err: any) {
      setRefreshError(err);
      onRefreshError && onRefreshError(err);
      setRefreshError(err);
    } finally {
      setIsRefreshing(false);
      onRefreshSettled && onRefreshSettled();
    }
  };

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
      refreshAbortControllerRef.current?.abort();
    };
  }, []);

  return {
    data,
    setData,
    failedError,
    isLoading,
    apiCall,
    refreshError,
    isRefreshing,
    refreshApiCall,
  };
};
