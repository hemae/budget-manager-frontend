import {createContext, Dispatch, SetStateAction} from 'react'
import {IReportTableData} from '../../api'
import {UniqueId} from '@shared/api'
import {emptyFunc} from '@shared/react'

export interface IAverageReportContext {
    averageExpenseReportTableData: IReportTableData[]
    averageIncomeReportTableData: IReportTableData[]
    needToGetPerMonth: number
    gotPerCurrentMonth: number
    averageReportTableDataLoading: boolean
    currencyId: UniqueId | null
    setCurrencyId: Dispatch<SetStateAction<UniqueId | null>>
    date: string | null
    setDate: Dispatch<SetStateAction<string | null>>
}

export const AverageReportContext = createContext<IAverageReportContext>({
    averageExpenseReportTableData: [],
    averageIncomeReportTableData: [],
    needToGetPerMonth: 0,
    gotPerCurrentMonth: 0,
    averageReportTableDataLoading: false,
    currencyId: null,
    setCurrencyId: emptyFunc,
    date: null,
    setDate: emptyFunc,
})
