import {MouseEventHandler, useCallback, useEffect, useMemo, useState} from 'react'
import moment, {Moment} from 'moment'
import {getDays} from '../lib'
import {OnDateRangeSelect} from '../interfaces'


interface Options {
    onDateRangeSelect: OnDateRangeSelect
    currentValue?: [string | null, string | null]
    initialMount?: number
    initialYear?: number
}

interface Returned {
    viewMonths: [number, number]
    viewYears: [number, number]
    viewDates: [Moment[], Moment[]]
    yearMode: boolean
    monthMode: boolean
    dayMode: boolean
    firstSelectedDate: Moment | null
    secondSelectedDate: Moment | null
    onMonthClick: MouseEventHandler
    onYearClick: MouseEventHandler
    dateSelect: (date: Moment) => void
    onMonthSelect: (month: number) => void
    onYearSelect: (year: number) => void
    prevMonthClick: () => void
    nextMonthClick: () => void
    prevYearClick: () => void
    nextYearClick: () => void
    overedDay: Moment | null
    onDateOver: (date: Moment) => MouseEventHandler
    onDateLeave: () => void
}

export function useDoubleCalendar(options: Options): Returned {

    const {
        onDateRangeSelect,
        currentValue,
        initialMount = moment().month(),
        initialYear = moment().year(),
    } = options

    const [viewMonths, setViewMonths] = useState<[number, number]>([initialMount, (initialMount + 1) % 12])
    const [viewYears, setViewYears] = useState<[number, number]>([initialYear, initialMount < ((initialMount + 1) % 12) ? initialYear : initialYear + 1])

    const [firstSelectedDate, setFirstSelectedDate] = useState<Moment | null>(currentValue?.[0] ? moment(currentValue[0]) : null)
    const [secondSelectedDate, setSecondSelectedDate] = useState<Moment | null>(currentValue?.[1] ? moment(currentValue[1]) : null)

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

    const viewDatesFirst = useMemo(() => getDays(viewMonths[0], viewYears[0]), [viewMonths, viewYears])
    const viewDatesSecond = useMemo(() => getDays(viewMonths[1], viewYears[1]), [viewMonths, viewYears])

    const dateSelect = useCallback((date: Moment) => {
        if (firstSelectedDate && secondSelectedDate) {
            setFirstSelectedDate(date)
            setSecondSelectedDate(null)
        } else if (firstSelectedDate) {
            setSecondSelectedDate(date)
        } else {
            setFirstSelectedDate(date)
        }
    }, [firstSelectedDate, secondSelectedDate])

    useEffect(() => {
        if (currentValue?.every(date => !date)) {
            setFirstSelectedDate(null)
            setSecondSelectedDate(null)
        }
    }, [currentValue])

    const onMonthClick = useCallback<MouseEventHandler>(() => {
        setMonthMode(true)
    }, [])

    const onYearClick = useCallback<MouseEventHandler>(() => {
        setYearMode(true)
    }, [])

    const onMonthSelect = useCallback((month: number) => {
        setViewMonths([month, (month + 1) % 12])
        if ((month + 1) % 12 === 0) setViewYears(prev => [prev[0], prev[1] + 1])
        setDayMode(true)
    }, [])

    const onYearSelect = useCallback((year: number) => {
        setViewYears([year, viewMonths[0] < (viewMonths[1] % 12) ? year : year + 1])
        setMonthMode(true)
    }, [viewMonths])

    useEffect(() => {
        const sorted = ([firstSelectedDate, secondSelectedDate] as [Moment, Moment])
            .sort((el1, el2) => {
                if (!el1 || !el2) return 0
                if (el1 > el2) return 1
                if (el1 < el2) return -1
                return 0
            })
        onDateRangeSelect(sorted.map(date => date?.format('YYYY-MM-DD') || null) as [string | null, string | null], sorted)
    }, [firstSelectedDate, secondSelectedDate, onDateRangeSelect])

    const prevMonthClick = useCallback(() => {
        setViewMonths(prev => {
            return prev.map((prevViewMont, index) => {
                if (prevViewMont === 0) {
                    if (index === 1) setViewYears([viewYears[0], viewYears[1] - 1])
                    else setViewYears([viewYears[0] - 1, viewYears[1]])
                    return 11
                }
                return prevViewMont - 1
            }) as [number, number]
        })
    }, [viewYears])

    const nextMonthClick = useCallback(() => {
        setViewMonths(prev => {
            return prev.map((prevViewMont, index) => {
                if (prevViewMont === 11) {
                    if (index === 1) setViewYears([viewYears[0], viewYears[1] + 1])
                    else setViewYears([viewYears[0] + 1, viewYears[1]])
                    return 0
                }
                return prevViewMont + 1
            }) as [number, number]
        })
    }, [viewYears])

    const prevYearClick = useCallback(() => {
        setViewYears(prev => [prev[0] - 1, prev[1] - 1])
    }, [])

    const nextYearClick = useCallback(() => {
        setViewYears(prev => [prev[0] + 1, prev[1] + 1])
    }, [])

    const [overedDay, setOveredDay] = useState<Moment | null>(null)

    const onDateOver = useCallback<(date: Moment) => MouseEventHandler>((date) => () => {
        setOveredDay(date)
    }, [])

    const onDateLeave = useCallback(() => {
        setOveredDay(null)
    }, [])

    return {
        viewMonths,
        viewYears,
        viewDates: [viewDatesFirst, viewDatesSecond],
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
    }
}