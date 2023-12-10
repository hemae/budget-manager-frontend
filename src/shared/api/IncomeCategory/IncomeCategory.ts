import {Api} from '../lib'
import {PagedResult} from '../interfaces'
import {
    IncomeCategoryPostBody,
    IncomeCategoryPutByIdBody,
} from './body'
import {
    IncomeCategoryResponse,
    IncomeCategoryDeleteByIdResponse,
} from './interfaces'
import {
    IncomeCategoryGetByIdParams,
    IncomeCategoryPutByIdParams,
    IncomeCategoryDeleteByIdParams,
} from './params'
import {
    IncomeCategoryGetQuery,
} from './query'

export class IncomeCategory {

    private static _basePath = '/income-category'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${IncomeCategory._basePath}`
        return {
            get(query: IncomeCategoryGetQuery) {
                const path = '/'
                return Api.get<PagedResult<IncomeCategoryResponse>>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getById({id}: IncomeCategoryGetByIdParams) {
                const path = '/'
                return Api.get<IncomeCategoryResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
            post(body: IncomeCategoryPostBody) {
                const path = '/'
                return Api.post<IncomeCategoryResponse>({
                    path: `${basePath}${path}`,
                    body,
                })
            },
            putById({id}: IncomeCategoryPutByIdParams, body: IncomeCategoryPutByIdBody) {
                const path = '/'
                return Api.put<IncomeCategoryResponse>({
                    path: `${basePath}${path}${id}`,
                    body,
                })
            },
            deleteById({id}: IncomeCategoryDeleteByIdParams) {
                const path = '/'
                return Api.delete<IncomeCategoryDeleteByIdResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
        }
    }
}
