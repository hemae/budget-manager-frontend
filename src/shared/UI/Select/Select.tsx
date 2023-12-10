import React, {MouseEventHandler, useCallback, useMemo, useState} from 'react'
import {SelectOption, SelectProps} from './interfaces'
import {AiFillCaretDown} from 'react-icons/ai'
import {Dropdown, useDropdown} from '../Dropdown'
import {SelectDropdown} from '../SelectDropdown'
import {ClearButton} from '../ClearButton'
import {SmallLoader} from '../SmallLoader'
import {Input} from '../Input'
import classNames from 'classnames'
import './Select.scss'

export const Select: React.FC<SelectProps> = (props) => {

    const {
        dropdownPlacement,
        dropdownClassName,
        currentValue,
        options,
        onSelect,
        wrapperClassName,
        inputWrapperClassName,
        className,
        optionTitle = true,
        allowSearch = false,
        onSearch,
        allowClear = false,
        hideOnSelect = true,
        disabled,
        loading = false,
        value: _,
        onChange: __,
        onSelectChange: internalOnChange,
        onBlur,
        noDataLabel = 'Data is Empty',
        ...rest
    } = props

    const {
        dropdownShown,
        dropDownToggle,
        dropdownOptions,
        setDropdownShown,
        onDropdown
    } = useDropdown()

    const [inputValue, setInputValue] = useState<string>('')

    const onInputBlur = useCallback<React.FocusEventHandler<HTMLInputElement>>((event) => {
        onBlur?.(event)
        if (!onDropdown) setDropdownShown(false)
    }, [onBlur, onDropdown])

    const onWrapperClick = useCallback<React.MouseEventHandler<HTMLDivElement>>(() => {
        if (!dropdownShown && !disabled) dropDownToggle()
    }, [dropDownToggle, dropdownShown, disabled])

    const onSelectHandler = useCallback((option: SelectOption) => {
        onSelect(option.value, option)
        internalOnChange?.(option.value, option)
        setInputValue('')
        if (hideOnSelect && dropdownShown) dropDownToggle()
    }, [onSelect, hideOnSelect, dropDownToggle, dropdownShown])

    const onInputChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(({target: {value}}) => {
        if (allowSearch) {
            setInputValue(value)
            onSearch?.(value)
        }
    }, [allowSearch, onSearch])

    const currentOptionLabel = useMemo(() => {
        return options.find(option => option.value === currentValue)?.label || null
    }, [currentValue, options])

    const clearShowCondition = useMemo(() => {
        return !disabled && allowClear && currentValue !== null && currentValue !== undefined
    }, [currentValue, allowClear, disabled])

    const onClear = useCallback<MouseEventHandler>((event) => {
        if (clearShowCondition) {
            event?.stopPropagation()
            onSelect(null, {value: null, label: ''})
        }
    }, [clearShowCondition, onSelect])

    return (
        <div
            className={classNames(
                'ui-select',
                wrapperClassName,
                {search: allowSearch}
            )}
        >
            <Input
                {...rest}
                value={currentOptionLabel || inputValue || ''}
                onChange={onInputChange}
                wrapperClassName={inputWrapperClassName}
                onWrapperClick={onWrapperClick}
                suffixIcon={loading
                    ? <SmallLoader className='ui-select__loader'/>
                    : clearShowCondition
                        ? <ClearButton/>
                        : <AiFillCaretDown
                            className={classNames(
                                'ui-select__caret',
                                {active: dropdownShown}
                            )}
                        />}
                onSuffixIconClick={onClear}
                disabled={disabled}
                className={classNames(
                    'ui-select__input',
                    {['input-not-caret']: !allowSearch},
                    className
                )}
                onBlur={onInputBlur}
            />
            <Dropdown
                dropdownPlacement={dropdownPlacement}
                dropdownOptions={dropdownOptions}
            >
                <SelectDropdown
                    noDataLabel={noDataLabel}
                    options={options}
                    currentValue={currentValue}
                    onSelect={onSelectHandler}
                    optionTitle={optionTitle}
                    className={classNames('ui-select-dropdown-select', dropdownClassName)}
                />
            </Dropdown>
        </div>
    )
}
