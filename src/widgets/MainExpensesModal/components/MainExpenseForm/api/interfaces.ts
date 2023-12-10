import {EMainExpenseFormFieldName} from './enums'
import {DateOnly, UniqueId} from '@shared/api'

export interface IMainExpenseFormValues {
    [EMainExpenseFormFieldName.name]: string
    [EMainExpenseFormFieldName.value]: number
    [EMainExpenseFormFieldName.currencyId]: UniqueId
    [EMainExpenseFormFieldName.date]: DateOnly
}
