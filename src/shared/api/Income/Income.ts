import {Api} from '../lib'
import {PagedResult} from '../interfaces'
import {
    IncomePostBody,
    IncomePutByIdBody,
} from './body'
import {
    IncomeResponse,
    IncomeDeleteByIdResponse,
} from './interfaces'
import {
    IncomeGetByIdParams,
    IncomePutByIdParams,
    IncomeDeleteByIdParams,
} from './params'
import {
    IncomeGetQuery,
} from './query'

export class Income {

    private static _basePath = '/income'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${Income._basePath}`
        return {
            get(query: IncomeGetQuery) {
                const path = '/'
                return Api.get<PagedResult<IncomeResponse>>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getById({id}: IncomeGetByIdParams) {
                const path = '/'
                return Api.get<IncomeResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
            post(body: IncomePostBody) {
                const path = '/'
                return Api.post<IncomeResponse>({
                    path: `${basePath}${path}`,
                    body,
                })
            },
            putById({id}: IncomePutByIdParams, body: IncomePutByIdBody) {
                const path = '/'
                return Api.put<IncomeResponse>({
                    path: `${basePath}${path}${id}`,
                    body,
                })
            },
            deleteById({id}: IncomeDeleteByIdParams) {
                const path = '/'
                return Api.delete<IncomeDeleteByIdResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
        }
    }
}
