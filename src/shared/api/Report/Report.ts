import {Api} from '../lib'
import {

} from './body'
import {
    ReportResponse,
    ReportForCurrentDateResponse,
    ReportRemaindersByCurrenciesResponse,
} from './interfaces'
import {

} from './params'
import {
    ReportGetQuery,
    ReportGetForCurrentDateQuery,
    ReportRemaindersByCurrenciesQuery,
} from './query'

export class Report {

    private static _basePath = '/report'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${Report._basePath}`
        return {
            get(query: ReportGetQuery) {
                const path = '/'
                return Api.get<ReportResponse>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getForCurrentDate(query: ReportGetForCurrentDateQuery) {
                const path = '/for-current-date'
                return Api.get<ReportForCurrentDateResponse>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getRemaindersByCurrencies(query: ReportRemaindersByCurrenciesQuery) {
                const path = '/remainders-by-currencies'
                return Api.get<ReportRemaindersByCurrenciesResponse>({
                    path: `${basePath}${path}`,
                    query,
                })
            }
        }
    }
}
