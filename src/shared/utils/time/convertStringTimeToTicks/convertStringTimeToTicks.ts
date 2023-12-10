import {
    TICKS_PER_HOUR,
    TICKS_PER_MINUTE,
    TICKS_PER_SECOND,
    TICKS_PER_DAY,
} from '../constants'

export function convertStringTimeToTicks(stringTime: string): number {

    const [clearTime, dayPart] = stringTime.split(' ') as [string, string | undefined]
    const [hours, minutes, seconds] = clearTime
        .split(':')
        .map(el => {
            if (el !== undefined) return +el
            return 0
        }) as [number, number, number | undefined]

    const _seconds = seconds ?? 0

    if (dayPart === 'AM' || dayPart === 'am' || dayPart === 'PM' || dayPart === 'pm') {
        if (dayPart === 'AM' || dayPart === 'am') {
            if (hours === 12) return minutes * TICKS_PER_MINUTE + _seconds * TICKS_PER_SECOND
            return hours * TICKS_PER_HOUR + minutes * TICKS_PER_MINUTE + _seconds * TICKS_PER_SECOND
        } else if (dayPart === 'PM' || dayPart === 'pm') {
            if (hours === 12) return hours * TICKS_PER_HOUR + minutes * TICKS_PER_MINUTE + _seconds * TICKS_PER_SECOND
            return hours * TICKS_PER_HOUR + minutes * TICKS_PER_MINUTE + _seconds * TICKS_PER_SECOND + TICKS_PER_DAY / 2
        }
        console.warn('convertStringTimeToTicks: part of day must be "AM", "am", "PM" or "pm"')
    }

    return hours * TICKS_PER_HOUR + minutes * TICKS_PER_MINUTE + _seconds * TICKS_PER_SECOND
}
