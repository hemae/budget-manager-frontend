import {ISplitTime} from '../interfaces'
import {TICKS_PER_DAY} from '../constants'

export function convertTicksToTimeObj(ticks: number): ISplitTime {

    let _ticks = ticks
    while(_ticks < 0) _ticks += TICKS_PER_DAY
    while(_ticks > TICKS_PER_DAY) _ticks -= TICKS_PER_DAY

    const milliseconds = Math.floor(_ticks / 10_000)
    const tick = _ticks - milliseconds * 10_000
    const seconds = Math.floor(milliseconds / 1_000)
    const millisecond = milliseconds - seconds * 1_000
    const minutes = Math.floor(seconds / 60)
    const second = seconds - minutes * 60
    const hour = Math.floor(minutes / 60)
    const minute = minutes - hour * 60

    return {tick, millisecond, second, minute, hour}
}

