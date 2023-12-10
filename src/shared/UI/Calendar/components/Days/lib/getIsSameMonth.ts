import {Moment} from 'moment'

export function getIsSameMonth(date: Moment, viewMonth: number, viewYear: number): boolean {
    return date.format('YYYY-MM') === `${viewYear}-${(viewMonth + 1) < 10 ? '0' : ''}${(viewMonth + 1)}`
}
