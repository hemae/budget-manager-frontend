import {Moment} from 'moment'

export type OnDateSelect = (stringDate: string | null, momentDate: Moment | null) => void

export type EnabledDays = string | string[] | ((date: string) => boolean)

export interface SingleCalendarProps {
    /** date select handler*/
    onDateSelect: OnDateSelect
    /** dates allowed for select*/
    enabledDates?: EnabledDays
    currentValue?: string | null
    initialMount?: number
    initialYear?: number
}

export type OnDateRangeSelect = (stringDates: [string | null, string | null], momentDates: [Moment | null, Moment | null]) => void

export interface DoubleCalendarProps {
    /** date select handler*/
    onDateRangeSelect: OnDateRangeSelect
    /** dates allowed for select*/
    enabledDates?: EnabledDays
    currentValue?: [string | null, string | null]
    initialMount?: number
    initialYear?: number
}
