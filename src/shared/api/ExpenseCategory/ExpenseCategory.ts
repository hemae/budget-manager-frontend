import {Api} from '../lib'
import {PagedResult} from '../interfaces'
import {
    ExpenseCategoryPostBody,
    ExpenseCategoryPutByIdBody,
} from './body'
import {
    ExpenseCategoryResponse,
    ExpenseCategoryDeleteByIdResponse,
} from './interfaces'
import {
    ExpenseCategoryGetByIdParams,
    ExpenseCategoryPutByIdParams,
    ExpenseCategoryDeleteByIdParams,
} from './params'
import {
    ExpenseCategoryGetQuery,
} from './query'

export class ExpenseCategory {

    private static _basePath = '/expense-category'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${ExpenseCategory._basePath}`
        return {
            get(query: ExpenseCategoryGetQuery) {
                const path = '/'
                return Api.get<PagedResult<ExpenseCategoryResponse>>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getById({id}: ExpenseCategoryGetByIdParams) {
                const path = '/'
                return Api.get<ExpenseCategoryResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
            post(body: ExpenseCategoryPostBody) {
                const path = '/'
                return Api.post<ExpenseCategoryResponse>({
                    path: `${basePath}${path}`,
                    body,
                })
            },
            putById({id}: ExpenseCategoryPutByIdParams, body: ExpenseCategoryPutByIdBody) {
                const path = '/'
                return Api.put<ExpenseCategoryResponse>({
                    path: `${basePath}${path}${id}`,
                    body,
                })
            },
            deleteById({id}: ExpenseCategoryDeleteByIdParams) {
                const path = '/'
                return Api.delete<ExpenseCategoryDeleteByIdResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
        }
    }
}
