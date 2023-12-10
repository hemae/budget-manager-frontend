import {TICKS_PER_MILLISECOND} from '../constants'

export function convertTicksToStringTime(ticks: number, viewSeconds: boolean = false, viewPartOfDay = true): string {
    const milliseconds = ticks / TICKS_PER_MILLISECOND
    const seconds = Math.floor(milliseconds / 1_000)
    const millisecond = milliseconds - seconds * 1_000
    const minutes = Math.floor(seconds / 60)
    const second = seconds - minutes * 60
    let hours = Math.floor(minutes / 60)
    const minute = minutes - hours * 60

    let partOfDay = 'AM'

    if (hours >= 12) {
        partOfDay = 'PM'
        if (hours > 12 && viewPartOfDay) hours -= 12
    }

    if (hours === 0 && viewPartOfDay) hours = 12

    const stringSeconds = `:${second < 10 ? '0' : ''}${second}`
    const stringMinutes = `${minute < 10 ? '0' : ''}${minute}`
    const stringHours = `${hours < 10 ? '0' : ''}${hours}:`

    return `${stringHours}${stringMinutes}${viewSeconds ? stringSeconds : ''}${viewPartOfDay ? ' ' + partOfDay : ''}`
}