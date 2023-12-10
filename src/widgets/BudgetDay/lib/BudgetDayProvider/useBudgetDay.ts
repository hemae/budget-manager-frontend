import {useContext} from 'react'
import {BudgetDayContext, IBudgetDayContext} from './BudgetDayContext'

export const useBudgetDay = () => useContext<IBudgetDayContext>(BudgetDayContext)
