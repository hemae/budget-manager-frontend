import React, {MouseEventHandler, useCallback, useMemo} from 'react'
import {monthBase} from './lib'
import classNames from 'classnames'
import moment from 'moment'
import './Months.scss'

interface MonthsProps {
    viewYear: number
    selectedMonth: number | null
    onMonthSelect: (month: number) => void
    className?: string
}

export const Months: React.FC<MonthsProps> = (props) => {

    const {
        viewYear,
        selectedMonth,
        onMonthSelect,
        className
    } = props

    const months = useMemo(() => monthBase, [])

    const onMonthClick = useCallback<(month: number) => MouseEventHandler>((month) => (event) => {
        event?.stopPropagation()
        onMonthSelect(month)
    }, [onMonthSelect])

    return (
        <div
            className={classNames(
                'ui-calendar-months',
                className
            )}
        >
            {months.map(month => {
                return (
                    <span
                        key={month.value}
                        className={classNames(
                            'ui-calendar-item',
                            'ui-calendar-interactive-item',
                            'ui-calendar-months__month',
                            {selected: selectedMonth === month.value},
                            {today: moment().format('YYYY-MM') === `${viewYear}-${(month.value + 1) < 10 ? '0' : ''}${month.value + 1}`},
                            {notActive: false},
                            {notAvailable: false}
                        )}
                        onClick={onMonthClick(month.value)}
                    >{month.label}</span>
                )
            })}
        </div>
    )
}
