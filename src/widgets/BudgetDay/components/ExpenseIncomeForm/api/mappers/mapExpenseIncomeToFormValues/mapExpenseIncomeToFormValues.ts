import {IExpenseIncome} from '../../../../../api'
import {IExpenseIncomeFormValues} from '../../interfaces'
import {EExpenseIncomeFormFiledName} from '../../enums'

export function mapExpenseIncomeToFormValues(expenseIncome: IExpenseIncome): IExpenseIncomeFormValues {
    return {
        [EExpenseIncomeFormFiledName.kind]: expenseIncome.kind,
        [EExpenseIncomeFormFiledName.value]: expenseIncome.value,
        [EExpenseIncomeFormFiledName.currencyId]: expenseIncome.currencyId,
        [EExpenseIncomeFormFiledName.name]: expenseIncome.name || undefined,
        [EExpenseIncomeFormFiledName.expenseCategoryId]: expenseIncome.expenseCategoryId,
        [EExpenseIncomeFormFiledName.incomeCategoryId]: expenseIncome.incomeCategoryId,
    }
}
