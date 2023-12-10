import {EMainIncomeFormFieldName} from './enums'
import {DateOnly, UniqueId} from '@shared/api'

export interface IMainIncomeFormValues {
    [EMainIncomeFormFieldName.name]: string
    [EMainIncomeFormFieldName.value]: number
    [EMainIncomeFormFieldName.currencyId]: UniqueId
    [EMainIncomeFormFieldName.date]: DateOnly
}
