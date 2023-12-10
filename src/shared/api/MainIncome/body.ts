import {UniqueId} from '../interfaces'

export interface MainIncomePostBody {
    value: number
    currencyId: UniqueId
    date: string
    name: string
    projectId: UniqueId
}

export interface MainIncomePutByIdBody {
    value: number
    currencyId: UniqueId
    date: string
    name: string
}
