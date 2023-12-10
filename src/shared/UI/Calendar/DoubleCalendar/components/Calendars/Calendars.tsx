import React, {MouseEventHandler} from 'react'
import {Days} from '../../../components'
import {Moment} from 'moment'
import {EnabledDays} from '../../../interfaces'
import classNames from 'classnames'
import './Calendars.scss'


interface CalendarsProps {
    viewMonths: [number, number]
    viewYears: [number, number]
    dates: [Moment[], Moment[]]
    firstSelectedDate: Moment | null
    secondSelectedDate: Moment | null
    onDateSelect: (date: Moment) => void
    enabledDates?: EnabledDays
    className?: string
    overedDay: Moment | null
    onDateOver: (date: Moment) => MouseEventHandler
    onDateLeave: () => void
}

export const Calendars: React.FC<CalendarsProps> = (props) => {

    const {
        viewYears,
        viewMonths,
        dates,
        firstSelectedDate,
        secondSelectedDate,
        onDateSelect,
        className,
        enabledDates,
        overedDay,
        onDateOver,
        onDateLeave
    } = props

    return (
        <div className={classNames('ui-calendar-double-calendars', className)}>
            {[0, 1].map(el => {
                return (
                    <Days
                        key={el}
                        viewMonth={viewMonths[el]}
                        viewYear={viewYears[el]}
                        dates={dates[el]}
                        firstSelectedDate={firstSelectedDate}
                        secondSelectedDate={secondSelectedDate}
                        onDateSelect={onDateSelect}
                        enabledDates={enabledDates}
                        className='ui-calendar-double-calendars__calendar'
                        overedDay={overedDay}
                        onDateOver={onDateOver}
                        onDateLeave={onDateLeave}
                    />
                )
            })}
        </div>
    )
}
