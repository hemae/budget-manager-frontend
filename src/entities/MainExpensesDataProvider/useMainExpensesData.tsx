import {useContext} from 'react'
import {MainExpensesDataContext, IMainExpenseDataContext} from './MainExpensesDataContext'

export const useMainExpensesData = () => useContext<IMainExpenseDataContext>(MainExpensesDataContext)
