import {createContext} from 'react'
import {MainExpenseResponse} from '@shared/api'
import {emptyFunc} from '@shared/react'

export interface IMainExpenseDataContext {
    mainExpenses: MainExpenseResponse[]
    mainExpensesLoading: boolean
    mainExpensesHandleRefresh: () => void
}

export const MainExpensesDataContext = createContext<IMainExpenseDataContext>({
    mainExpenses: [],
    mainExpensesLoading: false,
    mainExpensesHandleRefresh: emptyFunc,
})
