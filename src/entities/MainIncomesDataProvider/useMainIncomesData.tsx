import {useContext} from 'react'
import {MainIncomesDataContext, IMainIncomeDataContext} from './MainIncomesDataContext'

export const useMainIncomesData = () => useContext<IMainIncomeDataContext>(MainIncomesDataContext)
