import {
    GetOptions,
    PostOptions,
    PutOptions,
    DeleteOptions,
    PatchOptions,
    GetBlobOptions,
} from './interfaces'
import { makeAxiosRequest } from './lib'

export class Api {
    public static async get<Response = void>(options: GetOptions<Response>): Promise<Response> {
        return await makeAxiosRequest<Response>({
            method: 'get',
            ...options,
        });
    }

    public static async post<Response = void>(options: PostOptions<Response>): Promise<Response> {
        return await makeAxiosRequest<Response>({
            method: 'post',
            ...options,
        });
    }

    public static async put<Response = void>(options: PutOptions<Response>): Promise<Response> {
        return await makeAxiosRequest<Response>({
            method: 'put',
            ...options,
        });
    }

    public static async delete<Response = void>(options: DeleteOptions<Response>): Promise<Response> {
        return await makeAxiosRequest<Response>({
            method: 'delete',
            ...options,
        });
    }

    public static async patch<Response = void>(options: PatchOptions<Response>): Promise<Response> {
        return await makeAxiosRequest<Response>({
            method: 'patch',
            ...options,
        });
    }

    public static async getBlob<Response = void>(options: GetBlobOptions<Response>): Promise<Response> {
        return await makeAxiosRequest<Response>({
            method: 'get-blob',
            ...options,
        });
    }
}
