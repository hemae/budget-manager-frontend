import {IncomeCategoryResponse} from '@shared/api'
import {IIncomeCategoryOption} from '../../interfaces'

export function mapIncomeCategoriesToOptions(incomeCategories: IncomeCategoryResponse[]): IIncomeCategoryOption[] {
    return incomeCategories.map(incomeCategory => ({
        value: incomeCategory._id,
        label: incomeCategory.name,
    }))
}
