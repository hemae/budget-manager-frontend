import {createContext} from 'react'
import {MainIncomeResponse} from '@shared/api'
import {emptyFunc} from '@shared/react'

export interface IMainIncomeDataContext {
    mainIncomes: MainIncomeResponse[]
    mainIncomesLoading: boolean
    mainIncomesHandleRefresh: () => void
}

export const MainIncomesDataContext = createContext<IMainIncomeDataContext>({
    mainIncomes: [],
    mainIncomesLoading: false,
    mainIncomesHandleRefresh: emptyFunc,
})
