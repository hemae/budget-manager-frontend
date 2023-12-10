import {useContext} from 'react'
import {CurrencyContext, ICurrencyContext} from './CurrencyDataContext'

export const useCurrencyData = () => useContext<ICurrencyContext>(CurrencyContext)
