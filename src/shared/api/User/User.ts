import {Api} from '../lib'
import {PagedResult} from '../interfaces'
import {
    UserPostBody,
    UserPutByIdBody,
} from './body'
import {
    UserResponse,
    UserDeleteByIdResponse,
} from './interfaces'
import {
    UserGetByIdParams,
    UserPutByIdParams,
    UserDeleteByIdParams,
} from './params'
import {
    UserGetQuery,
} from './query'

export class User {

    private static _basePath = '/user'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${User._basePath}`
        return {
            get(query: UserGetQuery) {
                const path = '/'
                return Api.get<PagedResult<UserResponse>>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getById({id}: UserGetByIdParams) {
                const path = '/'
                return Api.get<UserResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
            post(body: UserPostBody) {
                const path = '/'
                return Api.post<UserResponse>({
                    path: `${basePath}${path}`,
                    body,
                })
            },
            putById({id}: UserPutByIdParams, body: UserPutByIdBody) {
                const path = '/'
                return Api.put<UserResponse>({
                    path: `${basePath}${path}${id}`,
                    body,
                })
            },
            deleteById({id}: UserDeleteByIdParams) {
                const path = '/'
                return Api.delete<UserDeleteByIdResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
        }
    }
}
