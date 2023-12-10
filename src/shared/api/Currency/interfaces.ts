import {EntityBase} from '../interfaces'

export interface CurrencyResponse extends EntityBase {
    value: number
    rateCode: string
    base: string
}

export interface CurrencyConvertResponse {
    value: number
}

export interface CurrencyRefreshHardResponse {
    message: string
}
