import {UniqueId, Nullable, EntityBase} from '../interfaces'

export interface IncomeResponse extends EntityBase {
    value: number
    currencyId: UniqueId
    initialRateValue: number
    lastActualRateValue: number
    rateCode: string
    date: string
    projectId: UniqueId
    name: Nullable<string>
    incomeCategoryId: Nullable<UniqueId>
}

export interface IncomeDeleteByIdResponse {
    id: UniqueId
}
