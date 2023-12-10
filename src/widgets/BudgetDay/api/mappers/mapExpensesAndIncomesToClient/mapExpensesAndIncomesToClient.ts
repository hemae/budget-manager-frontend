import {IExpenseIncome} from '../../interfaces'
import {ExpenseResponse, IncomeResponse} from '@shared/api'
import {EExpenseIncomeKind} from '../../enums'

interface Options {
    expenses: ExpenseResponse[]
    incomes: IncomeResponse[]
}

export function mapExpensesAndIncomesToClient({expenses, incomes}: Options): IExpenseIncome[] {
    return [
        ...expenses.map(e => ({...e, kind: EExpenseIncomeKind.expense, incomeCategoryId: null})),
        ...incomes.map(i => ({...i, kind: EExpenseIncomeKind.income, expenseCategoryId: null})),
    ].sort((item1, item2) => {
        if (item1.createdAt > item2.createdAt) return 1
        if (item1.createdAt < item2.createdAt) return -1
        return 0
    })
}
