import {createContext} from 'react'
import {IExpenseCategoryOption} from './api'
import {ExpenseCategoryResponse} from '@shared/api'
import {emptyFunc} from '@shared/react'

export interface IExpenseCategoriesDataContext {
    expenseCategories: ExpenseCategoryResponse[]
    expenseCategoryOptions: IExpenseCategoryOption[]
    expenseCategoriesLoading: boolean
    expenseCategoriesHandleRefresh: () => void
}

export const ExpenseCategoriesDataContext = createContext<IExpenseCategoriesDataContext>({
    expenseCategories: [],
    expenseCategoryOptions: [],
    expenseCategoriesLoading: false,
    expenseCategoriesHandleRefresh: emptyFunc,
})
