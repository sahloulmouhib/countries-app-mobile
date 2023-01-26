import AsyncStorage from '@react-native-async-storage/async-storage';

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from 'axios';

import { httpStatusCodes } from '_utils/httpRequestCodes';

import { strings } from '_i18n';

import { BEARER_KEY, ERR_NETWORK, REQUEST_DURATION } from './constants';
import { AxiosConfig } from './types';

const instanceAxios: AxiosInstance = axios.create();

/**
 * @template T - type of the response data
 *
 * @param {AxiosConfig} axiosConfig - configuration of the request
 *
 * @returns {Promise<AxiosPromise<T>>} axios promise
 */
export const sendAsyncRequest = async <T = any>(
  axiosConfig: AxiosConfig,
): Promise<AxiosPromise<T>> => {
  let {
    method,
    url,
    timeout = REQUEST_DURATION,
    responseType,
    params,
    payload,
    headers,
    useToken = true,
    transformReq,
    abortController,
  } = axiosConfig;
  let config: AxiosRequestConfig = {
    method: method,
    url: url,
    timeout: timeout,
    params: null,
    data: null,
    responseType: responseType,
  };
  if (params) {
    config.params = params;
  }
  if (payload) {
    config.data = payload;
  }

  headers = {
    ...headers,
    Accept: 'application/json',
  };

  if (useToken) {
    const accessToken = await getAccessToken();
    if (accessToken) {
      headers = {
        ...headers,
        Authorization: BEARER_KEY,
      };
    }
  }

  if (transformReq) config.transformRequest = transformReq;
  config.headers = headers;
  config.signal = abortController?.signal;
  return instanceAxios(config);
};

const getAccessToken = async () => {
  return await AsyncStorage.getItem('accessToken');
};

export const handleError = (error: AxiosError | Error | unknown): string => {
  if (error instanceof AxiosError) {
    if (error.response?.status) {
      switch (error.response.status) {
        case httpStatusCodes.UNAUTHORIZED:
          return strings('session.description');
        default:
          return strings('errors.server');
      }
    } else if (error.code === ERR_NETWORK) {
      return strings('errors.network');
    }
    return strings('errors.unknown_error');
  }
  return strings('errors.unknown_error');
};
