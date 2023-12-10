import {useContext} from 'react'
import {ExpenseCategoriesDataContext, IExpenseCategoriesDataContext} from './ExpenseCategoriesDataContext'

export const useExpenseCategoriesData = () => useContext<IExpenseCategoriesDataContext>(ExpenseCategoriesDataContext)
