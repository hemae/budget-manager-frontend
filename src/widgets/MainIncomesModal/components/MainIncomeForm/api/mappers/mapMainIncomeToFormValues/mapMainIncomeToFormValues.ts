import {MainIncomeResponse} from '@shared/api'
import {IMainIncomeFormValues} from '../../interfaces'
import {EMainIncomeFormFieldName} from '../../enums'

export function mapMainIncomeToFormValues(expenseCategory: MainIncomeResponse): IMainIncomeFormValues {
    return {
        [EMainIncomeFormFieldName.name]: expenseCategory.name,
        [EMainIncomeFormFieldName.value]: expenseCategory.value,
        [EMainIncomeFormFieldName.currencyId]: expenseCategory.currencyId,
        [EMainIncomeFormFieldName.date]: expenseCategory.date,
    }
}
