import { GetOptions, PostOptions, PutOptions, DeleteOptions, PatchOptions, GetBlobOptions } from '../../interfaces';
import axios, { AxiosRequestConfig } from 'axios';
import { mergeAxiosConfig } from '../mergeAxiosConfig';
import {saveAs} from 'file-saver'

interface Options<Response = void>
    extends GetOptions<Response>,
        PostOptions<Response>,
        PutOptions<Response>,
        DeleteOptions<Response>,
        PatchOptions<Response>,
        GetBlobOptions<Response> {
    method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'get-blob';
}

export async function makeAxiosRequest<Response = void>(options: Options<Response>): Promise<Response> {
    const { method, path, body, blobFilename, ...rest } = options;

    const args = [path, body].filter((el) => el !== undefined) as [string, AxiosRequestConfig['data'] | undefined];
    if (method === 'get-blob') {
        const {data} = await axios.get<BlobPart>(path, {...mergeAxiosConfig(rest), responseType: 'blob'})
        const file = window.URL.createObjectURL(new Blob([data]))
        saveAs(file, blobFilename || new Date().toISOString())
        // @ts-ignore
        return data
    }

    const { data } = await axios[method]<Response>(...args, mergeAxiosConfig(rest));
    return data;
}
