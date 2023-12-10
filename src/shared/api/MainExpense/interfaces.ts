import {UniqueId, EntityBase} from '../interfaces'

export interface MainExpenseResponse extends EntityBase {
    value: number
    currencyId: UniqueId
    initialRateValue: number
    lastActualRateValue: number
    rateCode: string
    date: string
    projectId: UniqueId
    name: string
}

export interface MainExpenseDeleteByIdResponse {
    id: UniqueId
}
