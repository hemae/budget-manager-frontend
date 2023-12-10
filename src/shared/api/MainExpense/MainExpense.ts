import {Api} from '../lib'
import {PagedResult} from '../interfaces'
import {
    MainExpensePostBody,
    MainExpensePutByIdBody,
} from './body'
import {
    MainExpenseResponse,
    MainExpenseDeleteByIdResponse,
} from './interfaces'
import {
    MainExpenseGetByIdParams,
    MainExpensePutByIdParams,
    MainExpenseDeleteByIdParams,
} from './params'
import {
    MainExpenseGetQuery,
} from './query'

export class MainExpense {

    private static _basePath = '/main-expense'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${MainExpense._basePath}`
        return {
            get(query: MainExpenseGetQuery) {
                const path = '/'
                return Api.get<PagedResult<MainExpenseResponse>>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getById({id}: MainExpenseGetByIdParams) {
                const path = '/'
                return Api.get<MainExpenseResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
            post(body: MainExpensePostBody) {
                const path = '/'
                return Api.post<MainExpenseResponse>({
                    path: `${basePath}${path}`,
                    body,
                })
            },
            putById({id}: MainExpensePutByIdParams, body: MainExpensePutByIdBody) {
                const path = '/'
                return Api.put<MainExpenseResponse>({
                    path: `${basePath}${path}${id}`,
                    body,
                })
            },
            deleteById({id}: MainExpenseDeleteByIdParams) {
                const path = '/'
                return Api.delete<MainExpenseDeleteByIdResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
        }
    }
}
