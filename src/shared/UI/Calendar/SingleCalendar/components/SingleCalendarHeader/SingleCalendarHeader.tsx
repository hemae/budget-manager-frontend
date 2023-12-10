import React, {MouseEventHandler} from 'react'
import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
    AiOutlineLeft,
    AiOutlineRight
} from 'react-icons/ai'
import moment from 'moment'
import classNames from 'classnames'
import './SingleCalendarHeader.scss'

interface SingleCalendarHeaderProps {
    viewMonth: number
    viewYear: number
    onMonthClick: MouseEventHandler
    onYearClick: MouseEventHandler
    prevMonthClick: () => void
    nextMonthClick: () => void
    prevYearClick: () => void
    nextYearClick: () => void
}

export const SingleCalendarHeader: React.FC<SingleCalendarHeaderProps> = (props) => {

    const {
        viewMonth,
        viewYear,
        onMonthClick,
        onYearClick,
        prevMonthClick,
        nextMonthClick,
        prevYearClick,
        nextYearClick
    } = props

    return (
        <div
            className={classNames(
                'ui-calendar-header',
                'non-selectable',
                'ui-single-calendar-header'
            )}
        >
            <AiOutlineDoubleLeft
                className={classNames(
                    'ui-calendar-header__icon',
                    'ui-single-calendar-header__icon',
                    {none: false}
                )}
                onClick={prevYearClick}
            />
            <AiOutlineLeft
                className={classNames(
                    'ui-calendar-header__icon',
                    'ui-single-calendar-header__icon',
                    {none: false}
                )}
                onClick={prevMonthClick}
            />
            <div
                className={classNames(
                    'ui-calendar-header__label',
                    'left',
                    'ui-single-calendar-header__label'
                )}
            >
                <span onClick={onMonthClick}>
                    {moment().set({month: viewMonth}).format('MMM')}
                </span>
            </div>
            <div
                className={classNames(
                    'ui-calendar-header__label',
                    'right',
                    'ui-single-calendar-header__label'
                )}
            >
                <span onClick={onYearClick}>
                    {viewYear}
                </span>
            </div>
            <AiOutlineRight
                className={classNames(
                    'ui-calendar-header__icon',
                    'ui-single-calendar-header__icon',
                    {none: false}
                )}
                onClick={nextMonthClick}
            />
            <AiOutlineDoubleRight
                className={classNames(
                    'ui-calendar-header__icon',
                    'ui-single-calendar-header__icon',
                    {none: false}
                )}
                onClick={nextYearClick}
            />
        </div>
    )
}
