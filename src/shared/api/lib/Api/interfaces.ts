import { AxiosRequestConfig } from 'axios';

export interface GeneralOptions<
    Response = void,
    Query extends AxiosRequestConfig['params'] = AxiosRequestConfig['params'],
> {
    path: string;
    query?: Query;
    headers?: AxiosRequestConfig['headers'];
    config?: AxiosRequestConfig;
    blobFilename?: string;
}

export interface GetOptions<Response = void, Query extends AxiosRequestConfig['params'] = AxiosRequestConfig['params']>
    extends GeneralOptions<Response, Query> {}

export interface GetBlobOptions<Response = BlobPart, Query extends AxiosRequestConfig['params'] = AxiosRequestConfig['params']>
    extends GeneralOptions<Response, Query> {}

export interface PostOptions<
    Response = void,
    Body extends AxiosRequestConfig['data'] = AxiosRequestConfig['data'],
    Query extends AxiosRequestConfig['params'] = AxiosRequestConfig['params'],
> extends GeneralOptions<Response, Query> {
    body?: Body;
}

export interface PutOptions<
    Response = void,
    Body extends AxiosRequestConfig['data'] = AxiosRequestConfig['data'],
    Query extends AxiosRequestConfig['params'] = AxiosRequestConfig['params'],
> extends GeneralOptions<Response, Query> {
    body?: Body;
}

export interface DeleteOptions<
    Response = void,
    Query extends AxiosRequestConfig['params'] = AxiosRequestConfig['params'],
> extends GeneralOptions<Response, Query> {}

export interface PatchOptions<
    Response = void,
    Body extends AxiosRequestConfig['data'] = AxiosRequestConfig['data'],
    Query extends AxiosRequestConfig['params'] = AxiosRequestConfig['params'],
> extends GeneralOptions<Response, Query> {
    body?: Body;
}
