import {CurrencyResponse} from '@shared/api'
import {ICurrencyOption} from '../../interfaces'

export function mapCurrenciesToOptions(currencies: CurrencyResponse[]): ICurrencyOption[] {
    return currencies.map(currency => ({
        value: currency._id,
        label: currency.rateCode,
    }))
}
