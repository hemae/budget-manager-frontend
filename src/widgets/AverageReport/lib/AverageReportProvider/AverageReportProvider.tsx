import React, {useEffect, useState} from 'react'
import {
    getReport,
    mapReportResponseToTableData,
} from '../../api'
import {AverageReportContext, IAverageReportContext} from './AverageReportContext'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import {useAuth} from '@entities/AuthProvider'
import jsCookie from 'js-cookie'
import {preferredAverageReportCurrencyCookieFieldName} from './lib'
import {useAsyncData} from '@shared/react'
import moment from 'moment'
import {useErrorNotify} from '@features/useErrorNotify'
import {useMainIncomesData} from '@entities/MainIncomesDataProvider'
import {useMainExpensesData} from '@entities/MainExpensesDataProvider'

export const AverageReportProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const {currentProject} = useProjectsData()

    const {user} = useAuth()

    const [currencyId, setCurrencyId] = useState<string | null>(jsCookie.get(preferredAverageReportCurrencyCookieFieldName) || user?.preferredCurrencyId || null)

    useEffect(() => {
        if (currencyId) jsCookie.set(preferredAverageReportCurrencyCookieFieldName, currencyId)
    }, [currencyId])

    const [date, setDate] = useState<string | null>(moment().set({date: moment().date() - 1}).format('YYYY-MM-DD'))

    const {
        data: {averageExpenseReportTableData, averageIncomeReportTableData, needToGetPerMonth, gotPerCurrentMonth},
        loading: averageReportTableDataLoading,
        error: averageReportTableDataError,
        handleRefresh: averageReportTableDataHandleRefresh,
    } = useAsyncData(async () => {
        if (date && currencyId && currentProject) {
            const {totalRow, needToGetPerMonth, gotPerCurrentMonth} = await getReport({
                startDate: currentProject.settlementDate,
                endDate: date,
                currencyId,
                projectId: currentProject._id,
            })
            return {
                gotPerCurrentMonth,
                needToGetPerMonth,
                averageExpenseReportTableData: mapReportResponseToTableData(totalRow, 'averageExpensePerDay'),
                averageIncomeReportTableData: mapReportResponseToTableData(totalRow, 'averageIncomePerDay'),
            }
        }
        return {averageExpenseReportTableData: [], averageIncomeReportTableData: [], needToGetPerMonth: 0, gotPerCurrentMonth: 0}
    }, {averageExpenseReportTableData: [], averageIncomeReportTableData: [], needToGetPerMonth: 0, gotPerCurrentMonth: 0}, [currencyId, currentProject, date])

    useErrorNotify(averageReportTableDataError, 'report')

    const {mainExpenses} = useMainExpensesData()
    const {mainIncomes} = useMainIncomesData()

    useEffect(() => {
        averageReportTableDataHandleRefresh()
    }, [mainExpenses, mainIncomes])

    const value: IAverageReportContext = {
        averageExpenseReportTableData,
        averageIncomeReportTableData,
        needToGetPerMonth,
        gotPerCurrentMonth,
        averageReportTableDataLoading,
        currencyId,
        setCurrencyId,
        date,
        setDate,
    }

    return (
        <AverageReportContext.Provider
            value={value}
        >
            {children}
        </AverageReportContext.Provider>
    )
}
