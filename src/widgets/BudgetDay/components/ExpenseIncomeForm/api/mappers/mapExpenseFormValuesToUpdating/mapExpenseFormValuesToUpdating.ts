import {IExpenseIncomeFormValues} from '../../interfaces'
import {EExpenseIncomeFormFiledName} from '../../enums'
import {ExpensePutByIdBody} from '@shared/api'

export function mapExpenseFormValuesToUpdating(formValues: IExpenseIncomeFormValues, date: string): ExpensePutByIdBody {
    return {
        value: +formValues[EExpenseIncomeFormFiledName.value],
        currencyId: formValues[EExpenseIncomeFormFiledName.currencyId],
        name: formValues[EExpenseIncomeFormFiledName.name],
        expenseCategoryId: formValues[EExpenseIncomeFormFiledName.expenseCategoryId] || undefined,
        date,
    }
}
