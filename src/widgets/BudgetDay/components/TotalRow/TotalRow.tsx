import React from 'react'
import {Loader, OnSelect, Select} from '@shared/UI'
import {useBudgetDay} from '../../lib'
import {useCurrencyData} from '@entities/CurrencyDataProvider'
import classNames from 'classnames'
import './TotalRow.scss'

export const TotalRow: React.FC = () => {

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
        setReportCurrencyId(value)
    }

    return (
        <Loader
            loading={reportLoading}
        >
            {report &&
                <div
                className='widget-budget-day-total-row'
            >
                <span
                    className={classNames(
                        'widget-budget-day-total-row__label',
                        {expense: report.totalOfCurrentDate < 0},
                        {income: report.totalOfCurrentDate >= 0},
                    )}
                >Total {report.totalOfCurrentDate < 0 ? 'expense' : 'income'}:</span>
                <span
                    className='widget-budget-day-total-row__total'
                >{Math.abs(report.totalOfCurrentDate).toFixed(2)}</span>
                <Select
                    currentValue={reportCurrencyId}
                    options={currencyOptions}
                    onSelect={onCurrencySelect}
                    loading={currencyOptionsLoading}
                />
            </div>}
        </Loader>

    )
}
