import React, {MouseEventHandler} from 'react'
import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
    AiOutlineLeft,
    AiOutlineRight
} from 'react-icons/ai'
import moment from 'moment'
import classNames from 'classnames'
import './DoubleCalendarHeader.scss'


interface DoubleCalendarHeaderProps {
    viewMonths: [number, number]
    viewYears: [number, number]
    onMonthClick: MouseEventHandler
    onYearClick: MouseEventHandler
    prevMonthClick: () => void
    nextMonthClick: () => void
    prevYearClick: () => void
    nextYearClick: () => void
    dayMode: boolean
}

export const DoubleCalendarHeader: React.FC<DoubleCalendarHeaderProps> = (props) => {

    const {
        viewMonths,
        viewYears,
        onMonthClick,
        onYearClick,
        prevMonthClick,
        nextMonthClick,
        prevYearClick,
        nextYearClick,
        dayMode
    } = props

    return (
        <div className='ui-calendar-header ui-double-calendar-header non-selectable'>
            <AiOutlineDoubleLeft
                className={classNames(
                    'ui-calendar-header__icon ui-double-calendar-header__icon',
                    {none: false}
                )}
                onClick={prevYearClick}
            />
            <AiOutlineLeft
                className={classNames(
                    'ui-calendar-header__icon ui-double-calendar-header__icon',
                    {none: false}
                )}
                onClick={prevMonthClick}
            />
            <div className='ui-calendar-header__label ui-double-calendar-header__label'>
                <span onClick={onMonthClick}>
                    {moment().set({month: viewMonths[0]}).format('MMM')}
                </span>
                <span onClick={onYearClick}>
                    {viewYears[0]}
                </span>
            </div>
            {dayMode &&
                <div className='ui-calendar-header__label ui-double-calendar-header__label'>
                <span onClick={onMonthClick}>
                    {moment().set({month: viewMonths[1]}).format('MMM')}
                </span>
                    <span onClick={onYearClick}>
                    {viewYears[1]}
                </span>
                </div>}
            <AiOutlineRight
                className={classNames(
                    'ui-calendar-header__icon ui-double-calendar-header__icon',
                    {none: false}
                )}
                onClick={nextMonthClick}
            />
            <AiOutlineDoubleRight
                className={classNames(
                    'ui-calendar-header__icon ui-double-calendar-header__icon',
                    {none: false}
                )}
                onClick={nextYearClick}
            />
        </div>
    )
}
