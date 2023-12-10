import {convertStringTimeToTicks} from '../convertStringTimeToTicks'

const hoursMinutes = '07:23'
const expectedHoursMinutes = 265800000000

const hoursMinutesAM = '07:23 AM'
const expectedHoursMinutesAM = 265800000000

const hoursMinutesPM = '07:23 PM'
const expectedHoursMinutesPM = 697800000000

const hoursMinutesSeconds = '07:23:45'
const expectedHoursMinutesSeconds = 266250000000

const twelveCaseAM = '12:23:34 AM'
const expectedTwelveCaseAM = 14140000000

const twelveCasePM = '12:23:34 PM'
const expectedTwelveCasePM = 446140000000

describe('convertStringTimeToTicks function', () => {
    it('convertStringTimeToTicks | hh:mm case', () => {
        expect(convertStringTimeToTicks(hoursMinutes)).toBe(expectedHoursMinutes)
    })

    it('convertStringTimeToTicks | hh:mm am case', () => {
        expect(convertStringTimeToTicks(hoursMinutesAM)).toBe(expectedHoursMinutesAM)
    })

    it('convertStringTimeToTicks | hh:mm pm case', () => {
        expect(convertStringTimeToTicks(hoursMinutesPM)).toBe(expectedHoursMinutesPM)
    })

    it('convertStringTimeToTicks | hh:mm:ss case', () => {
        expect(convertStringTimeToTicks(hoursMinutesSeconds)).toBe(expectedHoursMinutesSeconds)
    })

    it('convertStringTimeToTicks | twelve am case', () => {
        expect(convertStringTimeToTicks(twelveCaseAM)).toBe(expectedTwelveCaseAM)
    })

    it('convertStringTimeToTicks | twelve pm case', () => {
        expect(convertStringTimeToTicks(twelveCasePM)).toBe(expectedTwelveCasePM)
    })
})
