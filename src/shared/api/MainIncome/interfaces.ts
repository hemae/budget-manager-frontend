import {UniqueId, EntityBase} from '../interfaces'

export interface MainIncomeResponse extends EntityBase {
    value: number
    currencyId: UniqueId
    initialRateValue: number
    lastActualRateValue: number
    rateCode: string
    date: string
    projectId: UniqueId
    name: string
}

export interface MainIncomeDeleteByIdResponse {
    id: UniqueId
}
