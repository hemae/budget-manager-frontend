import {MouseEventHandler, useCallback, useEffect, useMemo, useState} from 'react'
import moment, {Moment} from 'moment'
import {getDays} from '../lib'
import {OnDateSelect} from '../interfaces'

interface Options {
    onDateSelect: OnDateSelect
    currentValue?: string | null
    initialMount?: number
    initialYear?: number
}

interface Returned {
    viewMonth: number
    viewYear: number
    viewDates: Moment[]
    yearMode: boolean
    monthMode: boolean
    dayMode: boolean
    selectedDate: Moment | null
    onMonthClick: MouseEventHandler
    onYearClick: MouseEventHandler
    dateSelect: (date: Moment) => void
    onMonthSelect: (month: number) => void
    onYearSelect: (year: number) => void
    prevMonthClick: () => void
    nextMonthClick: () => void
    prevYearClick: () => void
    nextYearClick: () => void
}

export function useSingeCalendar(options: Options): Returned {

    const {
        onDateSelect,
        currentValue,
        initialMount = moment().month(),
        initialYear = moment().year(),
    } = options

    const [viewMonth, setViewMonth] = useState<number>(initialMount)
    const [viewYear, setViewYear] = useState<number>(initialYear)

    const [selectedDate, setSelectedDate] = useState<Moment | null>(currentValue ? moment(currentValue) : null)

    const [yearMode, setYearMode] = useState<boolean>(false)
    const [monthMode, setMonthMode] = useState<boolean>(false)
    const [dayMode, setDayMode] = useState<boolean>(true)

    useEffect(() => {
        if (yearMode) {
            setMonthMode(false)
            setDayMode(false)
        }
    }, [yearMode])

    useEffect(() => {
        if (monthMode) {
            setYearMode(false)
            setDayMode(false)
        }
    }, [monthMode])

    useEffect(() => {
        if (dayMode) {
            setYearMode(false)
            setMonthMode(false)
        }
    }, [dayMode])

    const viewDates = useMemo(() => getDays(viewMonth, viewYear), [viewMonth, viewYear])

    const dateSelect = useCallback((date: Moment) => {
        setSelectedDate(date)
    }, [])

    useEffect(() => {
        if (!currentValue) setSelectedDate(null)
    }, [currentValue])

    const onMonthClick = useCallback<MouseEventHandler>(() => {
        setMonthMode(true)
    }, [])

    const onYearClick = useCallback<MouseEventHandler>(() => {
        setYearMode(true)
    }, [])

    const onMonthSelect = useCallback((month: number) => {
        setViewMonth(month)
        setDayMode(true)
    }, [])

    const onYearSelect = useCallback((year: number) => {
        setViewYear(year)
        setMonthMode(true)
    }, [])

    useEffect(() => {
        if (selectedDate) {
            onDateSelect(selectedDate.format('YYYY-MM-DD'), selectedDate)
        }
    }, [selectedDate, onDateSelect])

    const prevMonthClick = useCallback(() => {
        setViewMonth(prev => {
            if (prev === 0) {
                setViewYear(viewYear - 1)
                return 11
            }
            return prev - 1
        })
    }, [viewYear])

    const nextMonthClick = useCallback(() => {
        setViewMonth(prev => {
            if (prev === 11) setViewYear(viewYear + 1)
            return (prev + 1) % 12
        })
    }, [viewYear])

    const prevYearClick = useCallback(() => {
        setViewYear(prev => prev - 1)
    }, [])

    const nextYearClick = useCallback(() => {
        setViewYear(prev => prev + 1)
    }, [])

    return {
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
    }
}