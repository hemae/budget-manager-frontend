import React from 'react'
import {useBudgetDay} from '../../lib'
import {useCurrencyData} from '@entities/CurrencyDataProvider'
import {Loader, OnSelect, Select} from '@shared/UI'
import classNames from 'classnames'
import './DailyReport.scss'

export const DailyReport: React.FC = () => {

    const {
        report,
        reportLoading,
        reportCurrencyId,
        setReportCurrencyId,
    } = useBudgetDay()

    const {
        currencyOptions,
        currencyOptionsLoading,
    } = useCurrencyData()

    const onCurrencySelect: OnSelect = (value) => {
        if (value) setReportCurrencyId(value)
    }

    return (
        <Loader
            loading={reportLoading}
        >
            {report &&
                <div
                    className='widget-budget-day-daily-report'
                >
                    <div
                        className='widget-budget-day-daily-report__item'
                    >
                <span
                    className='widget-budget-day-daily-report__label'
                >Available today:</span>
                        <span
                            className={classNames(
                                'widget-budget-day-daily-report__value',
                                {positive: report.remainderOfCurrentDate >= 0},
                                {negative: report.remainderOfCurrentDate < 0},
                            )}
                        >{report.remainderOfCurrentDate.toFixed(2)}</span>
                    </div>
                    <div
                        className='widget-budget-day-daily-report__item'
                    >
                <span
                    className='widget-budget-day-daily-report__label'
                >Available:</span>
                        <span
                            className={classNames(
                                'widget-budget-day-daily-report__value',
                                {positive: report.totalRemainderOfCurrentDate >= 0},
                                {negative: report.totalRemainderOfCurrentDate < 0},
                            )}
                        >{report.totalRemainderOfCurrentDate.toFixed(2)}</span>
                    </div>
                    <Select
                        currentValue={reportCurrencyId}
                        options={currencyOptions}
                        onSelect={onCurrencySelect}
                        loading={currencyOptionsLoading}
                        inputSize='large'
                    />
                </div>}
        </Loader>
    )
}
