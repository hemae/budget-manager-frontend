import React, {MouseEventHandler, useCallback, useMemo} from 'react'
import {getYears} from './lib'
import classNames from 'classnames'
import moment from 'moment'
import './Years.scss'

interface YearsProps {
    viewYear: number
    selectedYear: number | null
    onYearSelect: (year: number) => void
    className?: string
}

export const Years: React.FC<YearsProps> = (props) => {

    const {
        viewYear,
        selectedYear,
        onYearSelect,
        className
    } = props

    const years = useMemo(() => getYears(viewYear), [viewYear])

    const onYearClick = useCallback<(year: number) => MouseEventHandler>((year) => (event) => {
        event?.stopPropagation()
        onYearSelect(year)
    }, [onYearSelect])

    return (
        <div
            className={classNames(
                'ui-calendar-years',
                className
            )}
        >
            {years.map(year => {
                return (
                    <span
                        key={year}
                        onClick={onYearClick(year)}
                        className={classNames(
                            'ui-calendar-item',
                            'ui-calendar-interactive-item',
                            'ui-calendar-years__year',
                            {selected: selectedYear === year},
                            {today: moment().year() === year},
                            {notActive: false},
                            {notAvailable: false}
                        )}
                    >{year}</span>
                )
            })}
        </div>
    )
}
