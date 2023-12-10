import moment, {Moment} from 'moment'


export function getDays(viewMonth: number, viewYear: number): Moment[] {
    let k = 0
    let firstDate = moment().set({year: viewYear, month: viewMonth, date: k + 1})
    const count = 42
    while (firstDate.day() > 1) {
        firstDate = moment().set({year: viewYear, month: viewMonth, date: --k + 1})
    }
    let days: Moment[] = []
    for (let i = k; i < count + k; i++) {
        days.push(moment().set({year: viewYear, month: viewMonth, date: i}))
    }
    return days
}
