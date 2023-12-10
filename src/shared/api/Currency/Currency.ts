import {Api} from '../lib'
import {PagedResult} from '../interfaces'
import {
    CurrencyResponse,
    CurrencyConvertResponse,
} from './interfaces'
import {
    CurrencyGetQuery,
    CurrencyConversionQuery,
} from './query'

export class Currency {

    private static _basePath = '/currency'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${Currency._basePath}`
        return {
            get(query: CurrencyGetQuery) {
                const path = '/'
                return Api.get<PagedResult<CurrencyResponse>>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getConversion(query: CurrencyConversionQuery) {
                const path = '/conversion/'
                return Api.get<CurrencyConvertResponse>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            refreshHard() {
                const path = '/refresh-hard/'
                return Api.get<CurrencyConvertResponse>({
                    path: `${basePath}${path}`,
                })
            },
        }
    }
}
