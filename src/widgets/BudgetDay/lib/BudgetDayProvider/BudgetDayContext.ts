import {createContext, Dispatch, SetStateAction} from 'react'
import {IExpenseIncome} from '../../api'
import moment from 'moment'
import {emptyFunc} from '@shared/react'
import {ReportForCurrentDateResponse, UniqueId} from '@shared/api'

export interface IBudgetDayContext {
    expensesIncomes: IExpenseIncome[]
    expensesIncomesLoading: boolean
    date: string
    setDate: Dispatch<SetStateAction<string>>
    expensesIncomesHandleRefresh: () => void
    reportCurrencyId: UniqueId | null
    setReportCurrencyId: Dispatch<SetStateAction<UniqueId | null>>
    report: ReportForCurrentDateResponse | null
    reportLoading: boolean
    reportHandleRefresh: () => void
}

export const BudgetDayContext = createContext<IBudgetDayContext>({
    expensesIncomes: [],
    expensesIncomesLoading: false,
    date: moment().format('YYYY-MM-DD'),
    setDate: emptyFunc,
    expensesIncomesHandleRefresh: emptyFunc,
    reportCurrencyId: null,
    setReportCurrencyId: emptyFunc,
    report: null,
    reportLoading: false,
    reportHandleRefresh: emptyFunc,
})
