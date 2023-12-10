import {createContext, Dispatch, SetStateAction} from 'react'
import {ICurrencyOption} from './api'
import {UniqueId} from '@shared/api'
import {emptyFunc} from '@shared/react'

export interface ICurrencyContext {
    currencyOptions: ICurrencyOption[]
    currencyOptionsLoading: boolean
    from: UniqueId | null
    setFrom: Dispatch<SetStateAction<UniqueId | null>>
    to: UniqueId | null
    setTo: Dispatch<SetStateAction<UniqueId | null>>
    currencyRate: number | null
    currencyRateLoading: boolean
    currencyRateHandleRefresh: () => void
    usdId: UniqueId | null
}

export const CurrencyContext = createContext<ICurrencyContext>({
    currencyOptions: [],
    currencyOptionsLoading: false,
    from: null,
    setFrom: emptyFunc,
    to: null,
    setTo: emptyFunc,
    currencyRate: null,
    currencyRateLoading: false,
    currencyRateHandleRefresh: emptyFunc,
    usdId: null,
})
