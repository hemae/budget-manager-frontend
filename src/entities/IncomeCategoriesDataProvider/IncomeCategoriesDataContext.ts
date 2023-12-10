import {createContext} from 'react'
import {IIncomeCategoryOption} from './api'
import {IncomeCategoryResponse} from '@shared/api'
import {emptyFunc} from '@shared/react'

export interface IIncomeCategoriesDataContext {
    incomeCategories: IncomeCategoryResponse[]
    incomeCategoryOptions: IIncomeCategoryOption[]
    incomeCategoriesLoading: boolean
    incomeCategoriesHandleRefresh: () => void
}

export const IncomeCategoriesDataContext = createContext<IIncomeCategoriesDataContext>({
    incomeCategories: [],
    incomeCategoryOptions: [],
    incomeCategoriesLoading: false,
    incomeCategoriesHandleRefresh: emptyFunc,
})
