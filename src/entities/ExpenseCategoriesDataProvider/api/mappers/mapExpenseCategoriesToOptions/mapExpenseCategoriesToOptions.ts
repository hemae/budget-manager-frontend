import {ExpenseCategoryResponse} from '@shared/api'
import {IExpenseCategoryOption} from '../../interfaces'

export function mapExpenseCategoriesToOptions(expenseCategories: ExpenseCategoryResponse[]): IExpenseCategoryOption[] {
    return expenseCategories.map(expenseCategory => ({
        value: expenseCategory._id,
        label: expenseCategory.name,
    }))
}
