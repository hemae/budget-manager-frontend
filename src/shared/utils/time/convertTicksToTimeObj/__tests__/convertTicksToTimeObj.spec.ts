import {convertTicksToTimeObj} from '../convertTicksToTimeObj'
import {ISplitTime} from '../../interfaces'
import {TICKS_PER_DAY} from '../../constants'

// time: 02:23:34
const ticks = 86140000000
const ticksMoreThanTicksPerDay = TICKS_PER_DAY + ticks
const ticksLessThanZero = ticks - TICKS_PER_DAY

const expected: ISplitTime = {
    tick: 0,
    millisecond: 0,
    second: 34,
    minute: 23,
    hour: 2,
}

describe('convertTicksToTimeObj function', () => {
    it('convertTicksToTimeObj works | standard case', () => {
        expect(convertTicksToTimeObj(ticks)).toStrictEqual(expected)
    })

    it('convertTicksToTimeObj works | more than ticks per day case', () => {
        expect(convertTicksToTimeObj(ticksMoreThanTicksPerDay)).toStrictEqual(expected)
    })

    it('convertTicksToTimeObj works | more less than ticks zero', () => {
        expect(convertTicksToTimeObj(ticksLessThanZero)).toStrictEqual(expected)
    })
})
