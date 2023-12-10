import React, {MouseEventHandler, useCallback, useEffect, useMemo, useState} from 'react'
import {DateSelectProps} from './interfaces'
import {IoCalendarOutline} from 'react-icons/io5'
import {Dropdown, useDropdown} from '../Dropdown'
import {SingleCalendar} from '../Calendar'
import {OnDateSelect} from '../Calendar'
import {ClearButton} from '../ClearButton'
import {Input} from '../Input'
import moment from 'moment'
import classNames from 'classnames'
import './DateSelect.scss'

export const DateSelect: React.FC<DateSelectProps> = (props) => {

    const {
        currentValue,
        onDateSelect,
        enabledDates,
        initialYear,
        initialMount,
        format,
        dropdownPlacement,
        prefixIcon,
        suffixIcon,
        onPrefixIconClick,
        onSuffixIconClick,
        wrapperClassName,
        inputWrapperClassName,
        className,
        allowClear = false,
        hideOnSelect = true,
        disabled,
        value: _,
        onChange: __,
        ...rest
    } = props

    const {
        dropdownShown,
        setDropdownShown,
        dropDownToggle,
        dropdownOptions
    } = useDropdown()

    const [inputValue, setInputValue] = useState<string>(currentValue && format ? moment(currentValue).format(format) : (currentValue || ''))

    const onWrapperClick = useCallback<React.MouseEventHandler<HTMLDivElement>>(() => {
        if (!dropdownShown && !disabled) dropDownToggle()
    }, [dropDownToggle, dropdownShown, disabled])

    const onSelectHandler = useCallback<OnDateSelect>((date, mom) => {
        onDateSelect(date, mom)
    }, [onDateSelect])

    const clearShowCondition = useMemo(() => {
        return !disabled && allowClear && currentValue !== null && currentValue !== undefined
    }, [currentValue, allowClear, disabled])

    const onClear = useCallback<MouseEventHandler>((event) => {
        event?.stopPropagation()
        if (clearShowCondition) onDateSelect(null, null)
    }, [onDateSelect, clearShowCondition])

    useEffect(() => {
        setInputValue(currentValue && format ? moment(currentValue).format(format) : (currentValue || ''))
        if (hideOnSelect) setDropdownShown(false)
    }, [currentValue, format, hideOnSelect, setDropdownShown])

    return (
        <div
            className={classNames(
                'ui-date-select',
                wrapperClassName
            )}
        >
            <Input
                {...rest}
                className={classNames(
                    'ui-date-select__input',
                    'input-not-caret',
                    className
                )}
                value={inputValue}
                wrapperClassName={inputWrapperClassName}
                onWrapperClick={onWrapperClick}
                suffixIcon={clearShowCondition ? <ClearButton/> : <IoCalendarOutline/>}
                onSuffixIconClick={clearShowCondition ? onClear : undefined}
                disabled={disabled}
            />
            <Dropdown
                dropdownPlacement={dropdownPlacement}
                dropdownOptions={dropdownOptions}
            >
                <SingleCalendar
                    onDateSelect={onSelectHandler}
                    currentValue={currentValue}
                    enabledDates={enabledDates}
                    initialYear={initialYear}
                    initialMount={initialMount}
                />
            </Dropdown>
        </div>
    )
}
