import {Moment} from 'moment'


export function checkAllowedDates(date: Moment, enabledDates?: string | string[] | ((date: string) => boolean)): boolean {
    let returned = true
    if (enabledDates) {
        if (Array.isArray(enabledDates)) {
            returned &&= !!enabledDates.find(d => date.format('YYYY-MM-DD') === d)
        } else if (typeof enabledDates === 'function') {
            returned &&= enabledDates(date.format('YYYY-MM-DD'))
        } else {
            returned &&= enabledDates == date.format('YYYY-MM-DD')
        }
    }
    return returned
}
