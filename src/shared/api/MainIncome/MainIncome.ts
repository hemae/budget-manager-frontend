import {Api} from '../lib'
import {PagedResult} from '../interfaces'
import {
    MainIncomePostBody,
    MainIncomePutByIdBody,
} from './body'
import {
    MainIncomeResponse,
    MainIncomeDeleteByIdResponse,
} from './interfaces'
import {
    MainIncomeGetByIdParams,
    MainIncomePutByIdParams,
    MainIncomeDeleteByIdParams,
} from './params'
import {
    MainIncomeGetQuery,
} from './query'

export class MainIncome {

    private static _basePath = '/main-income'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${MainIncome._basePath}`
        return {
            get(query: MainIncomeGetQuery) {
                const path = '/'
                return Api.get<PagedResult<MainIncomeResponse>>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getById({id}: MainIncomeGetByIdParams) {
                const path = '/'
                return Api.get<MainIncomeResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
            post(body: MainIncomePostBody) {
                const path = '/'
                return Api.post<MainIncomeResponse>({
                    path: `${basePath}${path}`,
                    body,
                })
            },
            putById({id}: MainIncomePutByIdParams, body: MainIncomePutByIdBody) {
                const path = '/'
                return Api.put<MainIncomeResponse>({
                    path: `${basePath}${path}${id}`,
                    body,
                })
            },
            deleteById({id}: MainIncomeDeleteByIdParams) {
                const path = '/'
                return Api.delete<MainIncomeDeleteByIdResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
        }
    }
}
