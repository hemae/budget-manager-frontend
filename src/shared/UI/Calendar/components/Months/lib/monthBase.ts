import moment from 'moment/moment'

const rawMonthBase = [
    moment('0001-01-01'),
    moment('0001-02-01'),
    moment('0001-03-01'),
    moment('0001-04-01'),
    moment('0001-05-01'),
    moment('0001-06-01'),
    moment('0001-07-01'),
    moment('0001-08-01'),
    moment('0001-09-01'),
    moment('0001-10-01'),
    moment('0001-11-01'),
    moment('0001-12-01'),
]

export const monthBase = rawMonthBase.map(mom => ({
    value: mom.month(),
    label: mom.format('MMM')
}))
