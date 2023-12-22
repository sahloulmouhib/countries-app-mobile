import { AxiosRequestTransformer, AxiosResponse, ResponseType } from 'axios';

import { HttpMethod } from '_utils/enums';

/**
 *  AxiosConfig interface
 *
 * @interface AxiosConfig
 *
 */
export interface AxiosConfig {
  /**
   * @property
   * the http method of the request
   */
  method: HttpMethod;
  url: string;
  payload?: any;
  params?: any;
  headers?: any;
  useToken?: boolean;
  transformReq?: AxiosRequestTransformer | AxiosRequestTransformer[];
  responseType?: ResponseType;
  timeout?: number;
  abortController?: AbortController;
}

export interface UseApiType<D = any, T = any> extends AxiosConfig {
  useDataWrapper?: boolean;
  decodeData: (dataResponse: D) => T;
}

export interface UseApiOptionsType<D = any, T = any> {
  onSuccess?: (result: AxiosResponse<D, any>) => void;
  onRefreshSuccess?: (result: AxiosResponse<D, any>) => void;
  onFailedError?: (error: any) => void;
  onRefreshError?: (error: any) => void;
  onSettled?: () => void;
  initialData?: T;
  onRefreshSettled?: () => void;
  useDataWrapper?: boolean;
}

export interface UseFetchPaginatedType<D = any, T = any> {
  url: string;
  dataRequestParams?: any;
  decodeData: (dataResponse: D[]) => T[];
  useToken?: boolean;
}

export default interface PaginatedResponse<T> {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  from: number;
  to: number;
  data: Array<T>;
}
