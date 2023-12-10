import React, {MouseEventHandler, useCallback} from 'react'
import {dayNames, getIsSameMonth} from './lib'
import classNames from 'classnames'
import moment, {Moment} from 'moment'
import {checkAllowedDates} from '../../lib'
import {EnabledDays} from '../../interfaces'
import './Days.scss'

interface DaysProps {
    viewMonth: number
    dates: Moment[]
    selectedDate?: Moment | null
    firstSelectedDate?: Moment | null
    secondSelectedDate?: Moment | null
    onDateSelect: (date: Moment) => void
    className?: string
    enabledDates?: EnabledDays
    overedDay?: Moment | null
    onDateOver?: (date: Moment) => MouseEventHandler
    onDateLeave?: () => void
    prevMonthHandler?: () => void
    nextMonthHandler?: () => void
    viewYear?: number
}

export const Days: React.FC<DaysProps> = (props) => {

    const {
        viewYear,
        viewMonth,
        dates,
        selectedDate,
        firstSelectedDate,
        secondSelectedDate,
        onDateSelect,
        enabledDates,
        className,
        overedDay,
        onDateOver,
        onDateLeave,
        prevMonthHandler,
        nextMonthHandler
    } = props

    const selectHandler = useCallback((date: Moment) => {
        onDateSelect(date)
        if (prevMonthHandler && nextMonthHandler) {
            if (date.month() === 11 && viewMonth === 0) prevMonthHandler?.()
            else if (date.month() === 0 && viewMonth === 11) nextMonthHandler?.()
            else if (date.month() < viewMonth) prevMonthHandler?.()
            else if (date.month() > viewMonth) nextMonthHandler?.()
        }
    }, [viewMonth, onDateSelect, prevMonthHandler, nextMonthHandler])

    const onDateClick = useCallback<(date: Moment) => MouseEventHandler>((date) => (event) =>  {
        event?.stopPropagation()
        if (checkAllowedDates(date, enabledDates)) {
            if (viewYear !== undefined) {
                if (getIsSameMonth(date, viewMonth, viewYear)) {
                    selectHandler(date)
                }
            } else {
                selectHandler(date)
            }
        }
    }, [selectHandler, enabledDates, viewYear, viewMonth])

    const onDateOverHandler = useCallback<(date: Moment) => MouseEventHandler>((date) => (event) => {
        if (date.month() === viewMonth) onDateOver?.(date)(event)
    }, [onDateOver, viewMonth])

    return (
        <div
            onMouseLeave={onDateLeave}
            className={classNames(
                'ui-calendar-days',
                className
            )}
        >
            {dayNames.map(day => {
                return (
                    <span
                        key={day}
                        className={classNames(
                            'ui-calendar-item',
                            'ui-calendar-days__day-item',
                            'ui-calendar-days__day-name'
                        )}
                    >{day}</span>
                )
            })}
            {dates.map(date => {
                const today = moment().format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
                const notActive = viewMonth !== date.month()
                const notAvailable = !checkAllowedDates(date, enabledDates)

                const matched = selectedDate?.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
                    || firstSelectedDate?.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
                    || secondSelectedDate?.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')

                const isSameMonth = viewYear ? getIsSameMonth(date, viewMonth, viewYear) : true
                const selected = matched && isSameMonth
                const betweenSelected = overedDay && firstSelectedDate && !secondSelectedDate
                    ? ((date <= firstSelectedDate && date >= overedDay) || (date >= firstSelectedDate && date <= overedDay)) && !notActive && !notAvailable
                    : firstSelectedDate && secondSelectedDate
                        ? ((date <= firstSelectedDate && date >= secondSelectedDate) || (date >= firstSelectedDate && date <= secondSelectedDate)) && !notActive && !notAvailable
                        : false
                return (
                    <span
                        key={date.toISOString()}
                        className={classNames(
                            'ui-calendar-item',
                            'ui-calendar-interactive-item',
                            'ui-calendar-days__day-item',
                            'ui-calendar-days__day',
                            {selected},
                            {today},
                            {notActive},
                            {notAvailable},
                            {betweenSelected},
                            {notAllowed: !isSameMonth}
                        )}
                        onClick={onDateClick(date)}
                        onMouseOver={onDateOverHandler(date)}
                        title={date.format('D MMM, YYYY') + `${today ? ' (Today)' : ''}`}
                    >{date.date()}</span>
                )
            })}
        </div>
    )
}
