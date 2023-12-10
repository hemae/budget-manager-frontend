import {Api} from '../lib'
import {PagedResult} from '../interfaces'
import {
    ExpensePostBody,
    ExpensePutByIdBody,
} from './body'
import {
    ExpenseResponse,
    ExpenseDeleteByIdResponse,
} from './interfaces'
import {
    ExpenseGetByIdParams,
    ExpensePutByIdParams,
    ExpenseDeleteByIdParams,
} from './params'
import {
    ExpenseGetQuery,
} from './query'

export class Expense {

    private static _basePath = '/expense'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${Expense._basePath}`
        return {
            get(query: ExpenseGetQuery) {
                const path = '/'
                return Api.get<PagedResult<ExpenseResponse>>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getById({id}: ExpenseGetByIdParams) {
                const path = '/'
                return Api.get<ExpenseResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
            post(body: ExpensePostBody) {
                const path = '/'
                return Api.post<ExpenseResponse>({
                    path: `${basePath}${path}`,
                    body,
                })
            },
            putById({id}: ExpensePutByIdParams, body: ExpensePutByIdBody) {
                const path = '/'
                return Api.put<ExpenseResponse>({
                    path: `${basePath}${path}${id}`,
                    body,
                })
            },
            deleteById({id}: ExpenseDeleteByIdParams) {
                const path = '/'
                return Api.delete<ExpenseDeleteByIdResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
        }
    }
}
