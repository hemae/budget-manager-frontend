import {UniqueId, Nullable, EntityBase} from '../interfaces'

export interface ExpenseResponse extends EntityBase {
    value: number
    currencyId: UniqueId
    initialRateValue: number
    lastActualRateValue: number
    rateCode: string
    date: string
    projectId: UniqueId
    name: Nullable<string>
    expenseCategoryId: Nullable<UniqueId>
}

export interface ExpenseDeleteByIdResponse {
    id: UniqueId
}
