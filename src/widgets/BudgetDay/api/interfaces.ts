import {ExpenseResponse, IncomeResponse, UniqueId} from '@shared/api'
import {EExpenseIncomeKind} from './enums'

export interface IExpenseIncome extends ExpenseResponse, IncomeResponse {
    kind: EExpenseIncomeKind
    incomeCategoryId: UniqueId | null
    expenseCategoryId: UniqueId | null
}
