import React from 'react'
import {DoubleCalendarProps} from '../interfaces'
import {DoubleCalendarHeader, Calendars} from './components'
import {Months, Years} from '../components'
import {useDoubleCalendar} from './useDoubleCalendar'
import classNames from 'classnames'
import './DoubleCalendar.scss'

export const DoubleCalendar: React.FC<DoubleCalendarProps> = (props) => {

    const {
        onDateRangeSelect,
        enabledDates,
        currentValue,
        initialMount,
        initialYear
    } = props

    const {
        viewMonths,
        viewYears,
        viewDates,
        yearMode,
        monthMode,
        dayMode,
        firstSelectedDate,
        secondSelectedDate,
        onMonthClick,
        onYearClick,
        dateSelect,
        onMonthSelect,
        onYearSelect,
        prevMonthClick,
        nextMonthClick,
        prevYearClick,
        nextYearClick,
        overedDay,
        onDateOver,
        onDateLeave
    } = useDoubleCalendar({
        onDateRangeSelect,
        currentValue,
        initialMount,
        initialYear
    })

    return (
        <div className='ui-double-calendar'>
            <DoubleCalendarHeader
                viewMonths={viewMonths}
                viewYears={viewYears}
                onMonthClick={onMonthClick}
                onYearClick={onYearClick}
                prevMonthClick={prevMonthClick}
                nextMonthClick={nextMonthClick}
                prevYearClick={prevYearClick}
                nextYearClick={nextYearClick}
                dayMode={dayMode}
            />
            <div
                className={classNames(
                    'ui-double-calendar__select-area-wrapper',
                    {dayMode}
                )}
            >
                <Calendars
                    viewMonths={viewMonths}
                    viewYears={viewYears}
                    dates={viewDates}
                    firstSelectedDate={firstSelectedDate}
                    secondSelectedDate={secondSelectedDate}
                    onDateSelect={dateSelect}
                    enabledDates={enabledDates}
                    className={classNames(
                        'ui-double-calendar__select-area',
                        {none: !dayMode}
                    )}
                    overedDay={overedDay}
                    onDateOver={onDateOver}
                    onDateLeave={onDateLeave}
                />
                <Months
                    className={classNames(
                        'ui-double-calendar__select-area',
                        {none: !monthMode}
                    )}
                    selectedMonth={(firstSelectedDate || secondSelectedDate || null)?.month() || null}
                    onMonthSelect={onMonthSelect}
                    viewYear={viewYears[0]}
                />
                <Years
                    className={classNames(
                        'ui-double-calendar__select-area',
                        {none: !yearMode}
                    )}
                    viewYear={viewYears[0]}
                    selectedYear={(firstSelectedDate || secondSelectedDate || null)?.year() || null}
                    onYearSelect={onYearSelect}
                />
            </div>
        </div>
    )
}
