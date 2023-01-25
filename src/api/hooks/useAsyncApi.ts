import { useEffect, useRef } from 'react';

import { sendAsyncRequest } from '../helpers';
import { UseApiType } from '../types';

/**
 * Custom hook to make api calls and abort ongoing requests
 *
 * @template D - type of the response data
 * @template T - type of the decoded response data
 *
 * @returns {object} An object containing the properties {@link apiCallAsync} , {@link abortAll} and {@link abortById}
 *
 * @example
 * const { apicall } = useAsyncApi();
 * const getTodosApi = useAsyncApi<TodoResponse,Todo>();
 * const getTodos = async() => {
 * try{
 *   const res=await getTodosApi.apiCallAsync({
 *   url: endpoints.TODOS,
 *   method: HttpMethod.Get,
 *   decodeData: decodeTodos,
 *   useToken: true,
 *   useDataWrapper: false,
 * })
 * console.log(res);
 * }catch(error){
 * console.log(error);
 * }
 * };
 */
export const useAsyncApi = <D = any, T = any>() => {
  const mapAbortControllerRef = useRef<Map<number, AbortController>>(new Map());

  /**
   * Function to abort all requests
   * @returns void
   */
  const abortAll = () => {
    mapAbortControllerRef.current?.forEach(element => {
      element.abort();
    });
    mapAbortControllerRef.current?.clear();
  };

  /**
   * Function to abort a request by the given `requestId`
   *
   * @param  requestId - unique id to the request
   *
   * @returns void
   * */
  const abortById = (requestId: number) => {
    mapAbortControllerRef.current?.get(requestId)?.abort();
    mapAbortControllerRef.current?.delete(requestId);
  };

  /**
   * Function to make a request
   *
   * @param {UseApiType} newAxiosConfig - configuration for the request
   * @param {AbortController} abortController - abort controller for the request
   *
   * @returns a promise with the response data
   */
  const makeRequest = async <F>(
    newAxiosConfig: UseApiType<D, T>,
    abortController: AbortController,
  ) => {
    const {
      method,
      url,
      payload,
      params,
      useToken,
      headers,
      transformReq,
      responseType,
      timeout,
    } = newAxiosConfig;

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
      responseType: responseType,
    });
  };

  /**
   * Function to make an api call
   *
   * @param newAxiosConfig - configuration for the request
   * @param requestId - unique id for the request by default takes Math.random()
   *
   * @returns {Promise<T>} promise with the response data and aborts the request if needed
   */
  const apiCallAsync = async (
    newAxiosConfig: UseApiType<D, T>,
    requestId: number = Math.random(),
  ): Promise<T> => {
    try {
      let abortController = new AbortController();
      mapAbortControllerRef.current?.set(requestId, abortController);

      let result = await makeRequest<D>(newAxiosConfig, abortController);
      return newAxiosConfig.decodeData(result.data);
    } catch (error) {
      throw error;
    } finally {
      mapAbortControllerRef.current?.delete(requestId);
    }
  };

  useEffect(() => {
    return () => {
      abortAll();
    };
  }, []);

  return {
    apiCallAsync,
    abortAll,
    abortById,
  };
};
