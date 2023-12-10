import {StringNumber, Units} from '../interfaces'
import {TICKS_PER_MILLISECOND} from '../constants'

export function convertTicksTo(to: Units, fixed: number = 0) {
    return function (ticks: number): StringNumber {
        switch (to) {
            case 'milliseconds':
                return (ticks / TICKS_PER_MILLISECOND).toFixed(fixed)
            case 'seconds':
                return (ticks / TICKS_PER_MILLISECOND / 1000).toFixed(fixed)
            case 'minutes':
                return (ticks / TICKS_PER_MILLISECOND / 1000 / 60).toFixed(fixed)
            case 'hours':
                return (ticks / TICKS_PER_MILLISECOND / 1000 / 60 / 60).toFixed(fixed)
            case 'days':
                return (ticks / TICKS_PER_MILLISECOND / 1000 / 60 / 60 / 24).toFixed(fixed)
            default:
                return (ticks).toFixed(fixed)
        }
    }
}