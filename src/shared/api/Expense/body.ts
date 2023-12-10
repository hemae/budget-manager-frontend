import {Nullable, UniqueId} from '../interfaces'

export interface ExpensePostBody {
    value: number
    currencyId: UniqueId
    date: string
    name?: Nullable<string>
    expenseCategoryId?: Nullable<UniqueId>
    projectId: UniqueId
}

export interface ExpensePutByIdBody {
    value: number
    currencyId: UniqueId
    date: string
    name?: Nullable<string>
    expenseCategoryId?: Nullable<UniqueId>
}
