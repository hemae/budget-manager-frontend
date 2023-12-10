import {EExpenseIncomeFormFiledName} from './enums'
import {EExpenseIncomeKind} from '../../../api'
import {UniqueId} from '@shared/api'

export interface IExpenseIncomeFormValues {
    [EExpenseIncomeFormFiledName.kind]: EExpenseIncomeKind
    [EExpenseIncomeFormFiledName.value]: number
    [EExpenseIncomeFormFiledName.currencyId]: UniqueId
    [EExpenseIncomeFormFiledName.name]: string | undefined
    [EExpenseIncomeFormFiledName.expenseCategoryId]: UniqueId | null
    [EExpenseIncomeFormFiledName.incomeCategoryId]: UniqueId | null
}
