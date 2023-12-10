import React from 'react'
import {
    AverageReportProvider,
    useAverageReport,
    getAverageReportTableColumns,
} from './lib'
import {withWrapper} from '@shared/react'
import {DateSelect, Loader, OnDateSelect, OnSelect, Select, SimpleTable} from '@shared/UI'
import {useCurrencyData} from '@entities/CurrencyDataProvider'
import classNames from 'classnames'
import {EnabledDays} from '@shared/UI/Calendar/interfaces'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import moment from 'moment'
import './AverageReport.scss'

const AverageReportContent: React.FC = () => {

    const {
        averageExpenseReportTableData,
        averageIncomeReportTableData,
        averageReportTableDataLoading,
        currencyId,
        setCurrencyId,
        date,
        setDate,
        needToGetPerMonth,
        gotPerCurrentMonth,
    } = useAverageReport()

    const {
        currencyOptions,
        currencyOptionsLoading,
    } = useCurrencyData()

    const {currentProject} = useProjectsData()

    const onCurrencySelect: OnSelect = (value) => {
        if (value) setCurrencyId(value)
    }

    const onDateSelect: OnDateSelect = (date) => {
        if (date) setDate(date)
    }

    const enabledDates: EnabledDays = (date) => {
        if (!currentProject) return date <= moment().format('YYYY-MM-DD')
        return date >= currentProject.settlementDate && date <= moment().format('YYYY-MM-DD')
    }

    return (
        <Loader
            loading={averageReportTableDataLoading}
        >
            <div
                className='widget-average-report'
            >
                <h1
                    className='widget-average-report__title'
                >Average Report</h1>
                <div
                    className='widget-average-report__filters'
                >
                    <Select
                        currentValue={currencyId}
                        options={currencyOptions}
                        onSelect={onCurrencySelect}
                        loading={currencyOptionsLoading}
                        inputSize='large'
                    />
                    <DateSelect
                        currentValue={date}
                        onDateSelect={onDateSelect}
                        inputSize='large'
                        format='MMM D, YYYY'
                        enabledDates={enabledDates}
                    />
                </div>
                <div
                    className='widget-average-report__tables'
                >
                    <div
                        className='widget-average-report__table-wrapper'
                    >
                        <h1>Expenses: </h1>
                        <SimpleTable
                            data={averageExpenseReportTableData}
                            columns={getAverageReportTableColumns()}
                        />
                    </div>
                    <div
                        className='widget-average-report__table-wrapper'
                    >
                        <h1>Incomes: </h1>
                        <SimpleTable
                            data={averageIncomeReportTableData}
                            columns={getAverageReportTableColumns()}
                        />
                    </div>
                    <div
                        className='widget-average-report__table-wrapper'
                    >
                        <div
                            className='widget-average-report__total'
                        >
                            <h1>You need to get per month: </h1>
                            <span
                                className='widget-average-report__need'
                            >{Math.round((needToGetPerMonth ?? 0) * 100) / 100} {currencyOptions.find(c => c.value === currencyId)?.label}</span>
                        </div>
                        <div
                            className={classNames(
                                'widget-average-report__total',
                                {greater: (gotPerCurrentMonth ?? 0) >= (needToGetPerMonth ?? 0)},
                                {less: (gotPerCurrentMonth ?? 0) < (needToGetPerMonth ?? 0)},
                            )}
                        >
                            <h1>You got: </h1>
                            <span
                                className='widget-average-report__need'
                            >{Math.round((gotPerCurrentMonth ?? 0) * 100) / 100} {currencyOptions.find(c => c.value === currencyId)?.label}</span>
                        </div>
                        <div
                            className={classNames(
                                'widget-average-report__total',
                                {greater: (gotPerCurrentMonth ?? 0) >= (needToGetPerMonth ?? 0)},
                                {less: (gotPerCurrentMonth ?? 0) < (needToGetPerMonth ?? 0)},
                            )}
                        >
                            {(gotPerCurrentMonth ?? 0) >= (needToGetPerMonth ?? 0) &&
                                <>
                                    <h1>Remainder: </h1>
                                    <span
                                        className='widget-average-report__need'
                                    >{Math.round(((gotPerCurrentMonth ?? 0) - (needToGetPerMonth ?? 0)) * 100) / 100} {currencyOptions.find(c => c.value === currencyId)?.label}</span>
                                </>}
                            {(gotPerCurrentMonth ?? 0) < (needToGetPerMonth ?? 0) &&
                                <>
                                    <h1>Get more: </h1>
                                    <span
                                        className='widget-average-report__need'
                                    >{Math.round(((needToGetPerMonth ?? 0) - (gotPerCurrentMonth ?? 0)) * 100) / 100} {currencyOptions.find(c => c.value === currencyId)?.label}</span>
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </Loader>
    )
}

export const AverageReport = withWrapper(AverageReportProvider)(AverageReportContent)
