import {IExpenseIncomeFormValues} from '../../interfaces'
import {EExpenseIncomeFormFiledName} from '../../enums'
import {IncomePostBody, UniqueId} from '@shared/api'

export function mapIncomeFormValuesToCreation(formValues: IExpenseIncomeFormValues, date: string, projectId: UniqueId): IncomePostBody {
    return {
        value: +formValues[EExpenseIncomeFormFiledName.value],
        currencyId: formValues[EExpenseIncomeFormFiledName.currencyId],
        name: formValues[EExpenseIncomeFormFiledName.name],
        incomeCategoryId: formValues[EExpenseIncomeFormFiledName.incomeCategoryId],
        date,
        projectId,
    }
}
