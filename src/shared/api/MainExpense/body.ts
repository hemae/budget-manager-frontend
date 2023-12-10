import {UniqueId} from '../interfaces'

export interface MainExpensePostBody {
    value: number
    currencyId: UniqueId
    date: string
    name: string
    projectId: UniqueId
}

export interface MainExpensePutByIdBody {
    value: number
    currencyId: UniqueId
    date: string
    name: string
}
