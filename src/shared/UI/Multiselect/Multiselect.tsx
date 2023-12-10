import React, {useEffect, useMemo, useState} from 'react'
import {MultiselectProps} from './interfaces'
import {OnSelect, Select} from '@shared/UI'
import {FaTimes} from 'react-icons/fa'
import './Multiselect.scss'

export const Multiselect: React.FC<MultiselectProps> = (props) => {

    const {
        options,
        initialValues,
        onChange,
        loading,
        placeholder,
    } = props

    const [selected, setSelected] = useState<string[]>(initialValues || [])

    const filteredOptions = useMemo(() => {
        return options.filter(option => !selected.includes(option.value))
    }, [options, selected])

    const selectedOptions = useMemo(() => {
        return options.filter(option => selected.includes(option.value))
    }, [options, selected])

    const onSelect: OnSelect = (value) => {
        if (value) setSelected(prev => [...prev, value])
    }

    useEffect(() => {
        onChange(selected)
    }, [selected])

    const onValueDelete = (value: string) => {
        setSelected(prev => prev.filter(v => v !== value))
    }

    return (
        <div
            className='ui-multiselect'
        >
            <Select
                placeholder={placeholder}
                currentValue={null}
                options={filteredOptions}
                onSelect={onSelect}
                loading={loading}
                dropdownPlacement='top-left'
            />
            <div
                className='ui-multiselect__selected-content'
            >
                {selectedOptions.map(option => {
                    return (
                        <div
                            className='ui-multiselect__selected'
                        >
                            <span>{option.label}</span>
                            <FaTimes
                                onClick={() => onValueDelete(option.value)}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
