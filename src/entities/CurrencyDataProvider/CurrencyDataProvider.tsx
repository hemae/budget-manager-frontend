import React, {useEffect, useState} from 'react'
import {CurrencyContext, ICurrencyContext} from './CurrencyDataContext'
import {useAsyncData} from '@shared/react'
import {useErrorNotify} from '@features/useErrorNotify'
import {
    getCurrencies,
    mapCurrenciesToOptions,
    getConversion,
} from './api'
import {UniqueId} from '@shared/api'
import {useAuth} from '@entities/AuthProvider'
import {defaultCurrencyRateCode} from './lib'

export const CurrencyDataProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const {user} = useAuth()

    const [from, setFrom] = useState<UniqueId | null>(null)
    const [to, setTo] = useState<UniqueId | null>(null)
    const [usdId, setUsdId] = useState<UniqueId | null>(null)

    const {
        data: currencyOptions,
        loading: currencyOptionsLoading,
        error: currencyOptionsError,
    } = useAsyncData(async () => {
        const {results} = await getCurrencies({
            page: 1,
            pageSize: 200,
        })
        return mapCurrenciesToOptions(results)
    }, [], [])

    useErrorNotify(currencyOptionsError, 'currency rates')

    useEffect(() => {
        const usdCurrency = currencyOptions.find(currencyOption => currencyOption.label === defaultCurrencyRateCode)
        if (usdCurrency) {
            setFrom(usdCurrency.value)
            setUsdId(usdCurrency.value)
        }
        if (user?.preferredCurrencyId) {
            const targetCurrency = currencyOptions.find(currencyOption => currencyOption.value === user.preferredCurrencyId)
            if (targetCurrency) setTo(targetCurrency.value)
        } else {
            if (usdCurrency) setTo(usdCurrency.value)
        }
    }, [user, currencyOptions])

    const {
        data: currencyRate,
        loading: currencyRateLoading,
        error: currencyRateError,
        handleRefresh: currencyRateHandleRefresh,
    } = useAsyncData(async () => {
        if (from && to) {
            const {value} = await getConversion({from, to})
            return value
        }
        return null
    }, null, [from, to])

    useErrorNotify(currencyRateError, 'currency rate')

    const value: ICurrencyContext = {
        currencyOptions,
        currencyOptionsLoading,
        from,
        setFrom,
        to,
        setTo,
        currencyRate,
        currencyRateLoading,
        currencyRateHandleRefresh,
        usdId,
    }

    return (
        <CurrencyContext.Provider
            value={value}
        >
            {children}
        </CurrencyContext.Provider>
    )
}
