export interface ISplitTime {
    tick: number
    millisecond: number
    second: number
    minute: number
    hour: number
}

export type Units =
    'milliseconds'
    | 'seconds'
    | 'minutes'
    | 'hours'
    | 'days'

export type StringNumber = string
