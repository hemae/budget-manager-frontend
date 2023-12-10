import {Nullable, UniqueId} from '../interfaces'

export interface IncomePostBody {
    value: number
    currencyId: UniqueId
    date: string
    name?: Nullable<string>
    incomeCategoryId?: Nullable<UniqueId>
    projectId: UniqueId
}

export interface IncomePutByIdBody {
    value: number
    currencyId: UniqueId
    date: string
    name?: Nullable<string>
    incomeCategoryId?: Nullable<UniqueId>
}
