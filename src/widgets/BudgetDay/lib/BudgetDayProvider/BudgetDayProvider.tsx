import React, {useEffect, useState} from 'react'
import {BudgetDayContext, IBudgetDayContext} from './BudgetDayContext'
import moment from 'moment'
import {useAsyncData} from '@shared/react'
import {
    getExpenses,
    getIncomes,
    mapExpensesAndIncomesToClient,
    getReportForCurrentDate,
} from '../../api'
import {useErrorNotify} from '@features/useErrorNotify'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import {UniqueId} from '@shared/api'
import {useAuth} from '@entities/AuthProvider'
import jsCookie from 'js-cookie'
import {preferredTotalCurrencyCookieFieldName} from './lib'
import {useMainExpensesData} from '@entities/MainExpensesDataProvider'
import {useMainIncomesData} from '@entities/MainIncomesDataProvider'

export const BudgetDayProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const [date, setDate] = useState<string>(moment().format('YYYY-MM-DD'))

    const {currentProject} = useProjectsData()

    const {
        data: expensesIncomes,
        loading: expensesIncomesLoading,
        error: expensesIncomesError,
        handleRefresh: expensesIncomesHandleRefresh,
    } = useAsyncData(async () => {
        if (currentProject) {
            const {results: expenses} = await getExpenses({
                page: 1,
                pageSize: 1_000,
                date,
                projectId: currentProject._id,
            })
            const {results: incomes} = await getIncomes({
                page: 1,
                pageSize: 1_000,
                date,
                projectId: currentProject._id,
            })
            return mapExpensesAndIncomesToClient({expenses, incomes})
        }
        return []
    }, [], [date, currentProject])

    useErrorNotify(expensesIncomesError, 'expenses and incomes')

    const {user} = useAuth()

    const [reportCurrencyId, setReportCurrencyId] = useState<UniqueId | null>(jsCookie.get(preferredTotalCurrencyCookieFieldName) || user?.preferredCurrencyId || null)

    useEffect(() => {
        if (reportCurrencyId) jsCookie.set(preferredTotalCurrencyCookieFieldName, reportCurrencyId)
    }, [reportCurrencyId])

    const {
        data: report,
        loading: reportLoading,
        error: reportError,
        handleRefresh: reportHandleRefresh,
    } = useAsyncData(async () => {
        if (currentProject && reportCurrencyId) {
            return await getReportForCurrentDate({
                date,
                currencyId: reportCurrencyId,
                projectId: currentProject._id,
            })
        }
        return null
    }, null, [reportCurrencyId, currentProject, date])

    useErrorNotify(reportError, 'daily report')

    const {mainExpenses} = useMainExpensesData()
    const {mainIncomes} = useMainIncomesData()

    useEffect(() => {
        reportHandleRefresh()
    }, [mainExpenses, mainIncomes])

    const value: IBudgetDayContext = {
        expensesIncomes,
        expensesIncomesLoading,
        expensesIncomesHandleRefresh,
        date,
        setDate,
        reportCurrencyId,
        setReportCurrencyId,
        report,
        reportLoading,
        reportHandleRefresh,
    }

    return (
        <BudgetDayContext.Provider
            value={value}
        >
            {children}
        </BudgetDayContext.Provider>
    )
}
