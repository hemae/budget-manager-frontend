import {MainExpenseResponse} from '@shared/api'
import {IMainExpenseFormValues} from '../../interfaces'
import {EMainExpenseFormFieldName} from '../../enums'

export function mapMainExpenseToFormValues(expenseCategory: MainExpenseResponse): IMainExpenseFormValues {
    return {
        [EMainExpenseFormFieldName.name]: expenseCategory.name,
        [EMainExpenseFormFieldName.value]: expenseCategory.value,
        [EMainExpenseFormFieldName.currencyId]: expenseCategory.currencyId,
        [EMainExpenseFormFieldName.date]: expenseCategory.date,
    }
}
