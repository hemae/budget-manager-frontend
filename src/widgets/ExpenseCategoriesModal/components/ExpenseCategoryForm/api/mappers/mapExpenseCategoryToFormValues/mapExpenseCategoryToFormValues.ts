import {ExpenseCategoryResponse} from '@shared/api'
import {IExpenseCategoryFormValues} from '../../interfaces'
import {EExpenseCategoryFormFieldName} from '../../enums'

export function mapExpenseCategoryToFormValues(expenseCategory: ExpenseCategoryResponse): IExpenseCategoryFormValues {
    return {
        [EExpenseCategoryFormFieldName.name]: expenseCategory.name,
        [EExpenseCategoryFormFieldName.description]: expenseCategory.description || undefined,
    }
}
