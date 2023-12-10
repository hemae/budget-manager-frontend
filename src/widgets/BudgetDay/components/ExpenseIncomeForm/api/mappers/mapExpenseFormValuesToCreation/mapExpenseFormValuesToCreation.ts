import {IExpenseIncomeFormValues} from '../../interfaces'
import {EExpenseIncomeFormFiledName} from '../../enums'
import {ExpensePostBody, UniqueId} from '@shared/api'

export function mapExpenseFormValuesToCreation(formValues: IExpenseIncomeFormValues, date: string, projectId: UniqueId): ExpensePostBody {
    return {
        value: +formValues[EExpenseIncomeFormFiledName.value],
        currencyId: formValues[EExpenseIncomeFormFiledName.currencyId],
        name: formValues[EExpenseIncomeFormFiledName.name],
        expenseCategoryId: formValues[EExpenseIncomeFormFiledName.expenseCategoryId],
        projectId,
        date,
    }
}
