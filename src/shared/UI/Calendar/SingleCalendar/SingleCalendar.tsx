import React from 'react'
import {SingleCalendarProps} from '../interfaces'
import {Days, Months, Years} from '../components'
import {SingleCalendarHeader} from './components'
import {useSingeCalendar} from './useSingeCalendar'
import classNames from 'classnames'
import './SingleCalendar.scss'

export const SingleCalendar: React.FC<SingleCalendarProps> = (props) => {

    const {
        onDateSelect,
        currentValue,
        initialMount,
        initialYear,
        enabledDates
    } = props

    const {
        viewMonth,
        viewYear,
        viewDates,
        yearMode,
        monthMode,
        dayMode,
        selectedDate,
        onMonthClick,
        onYearClick,
        dateSelect,
        onMonthSelect,
        onYearSelect,
        prevMonthClick,
        nextMonthClick,
        prevYearClick,
        nextYearClick
    } = useSingeCalendar({
        onDateSelect,
        currentValue,
        initialMount,
        initialYear,
    })

    return (
        <div className='ui-single-calendar'>
            <SingleCalendarHeader
                viewMonth={viewMonth}
                viewYear={viewYear}
                onMonthClick={onMonthClick}
                onYearClick={onYearClick}
                prevMonthClick={prevMonthClick}
                nextMonthClick={nextMonthClick}
                prevYearClick={prevYearClick}
                nextYearClick={nextYearClick}
            />
            <div className='ui-single-calendar__select-area-wrapper'>
                <Days
                    className={classNames(
                        'ui-single-calendar__select-area',
                        {none: !dayMode}
                    )}
                    selectedDate={selectedDate}
                    onDateSelect={dateSelect}
                    dates={viewDates}
                    viewMonth={viewMonth}
                    enabledDates={enabledDates}
                    prevMonthHandler={prevMonthClick}
                    nextMonthHandler={nextMonthClick}
                />
                <Months
                    className={classNames(
                        'ui-single-calendar__select-area',
                        {none: !monthMode}
                    )}
                    selectedMonth={selectedDate?.month() || null}
                    onMonthSelect={onMonthSelect}
                    viewYear={viewYear}
                />
                <Years
                    className={classNames(
                        'ui-single-calendar__select-area',
                        {none: !yearMode}
                    )}
                    viewYear={viewYear}
                    selectedYear={selectedDate?.year() || null}
                    onYearSelect={onYearSelect}
                />
            </div>
        </div>
    )
}
