import {IExpenseIncomeFormValues} from '../../interfaces'
import {EExpenseIncomeFormFiledName} from '../../enums'
import {IncomePutByIdBody} from '@shared/api'

export function mapIncomeFormValuesToUpdating(formValues: IExpenseIncomeFormValues, date: string): IncomePutByIdBody {
    return {
        value: +formValues[EExpenseIncomeFormFiledName.value],
        currencyId: formValues[EExpenseIncomeFormFiledName.currencyId],
        name: formValues[EExpenseIncomeFormFiledName.name],
        incomeCategoryId: formValues[EExpenseIncomeFormFiledName.incomeCategoryId] || undefined,
        date,
    }
}
