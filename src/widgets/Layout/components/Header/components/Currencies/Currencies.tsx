import React, {useState} from 'react'
import {Button, Input, OnSelect, Select} from '@shared/UI'
import {FaExchangeAlt} from 'react-icons/fa'
import {useCurrencyData} from '@entities/CurrencyDataProvider'
import {useAuth} from '@entities/AuthProvider'
import './Currencies.scss'

export const Currencies: React.FC = () => {

    const {
        from,
        setFrom,
        to,
        setTo,
        currencyOptions,
        currencyOptionsLoading,
        currencyRate,
        currencyRateLoading,
    } = useCurrencyData()

    const {user} = useAuth()

    const [fromValue, setFromValue] = useState<number>(1)

    const onFromValueChange: React.ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
        if (!isNaN(+value)) setFromValue(+value)
    }

    const onFromSelect: OnSelect = (value) => {
        if (value) setFrom(value)
    }

    const onToSelect: OnSelect = (value) => {
        if (value) setTo(value)
    }

    const onSwapClick = () => {
        setFrom(to)
        setTo(from)
    }

    return (
        <div
            className='widget-layout-header-currencies'
        >
            <Input
                value={fromValue}
                onChange={onFromValueChange}
                inputSize='small'
            />
            <Select
                currentValue={from}
                loading={currencyOptionsLoading}
                options={currencyOptions}
                onSelect={onFromSelect}
                inputSize='small'
            />
            <Button
                size='small'
                onClick={onSwapClick}
            ><FaExchangeAlt/></Button>
            <span> = {(fromValue * (currencyRate ?? 1)).toFixed(4)}</span>
            <Select
                currentValue={user?.preferredCurrencyId ?? to}
                loading={currencyOptionsLoading}
                options={currencyOptions}
                onSelect={onToSelect}
                inputSize='small'
                dropdownPlacement='bottom-right'
            />
        </div>
    )
}
