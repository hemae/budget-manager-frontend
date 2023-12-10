import React, {MouseEventHandler, useCallback} from 'react'
import {SelectDropdownProps} from './interfaces'
import classNames from 'classnames'
import {AiOutlineCheck} from 'react-icons/ai'
import {SelectOption} from '@shared/UI'
import './SelectDropdown.scss'

export const SelectDropdown: React.FC<SelectDropdownProps> = (props) => {

    const {
        options,
        currentValue,
        onSelect,
        optionTitle = false,
        className,
        noDataLabel = 'Data is Empty',
    } = props

    const optionClick = useCallback<(option: SelectOption) => MouseEventHandler>((option) => () => {
        onSelect(option)
    }, [onSelect])

    return (
        <div
            className={classNames('ui-select-dropdown', {noData: !options.length}, className)}
        >
            {!options.length &&
                <div
                    className='ui-select-dropdown__no-data'
                >{noDataLabel}</div>}
            {options.map(option => {
                return (
                    <div
                        key={option.value}
                        className={classNames(
                            'ui-select-dropdown__option',
                            {selected: option.value === currentValue},
                            {flexEnd: !option.label}
                        )}
                        onClick={optionClick(option)}
                        title={optionTitle ? option.label : undefined}
                    ><span>{option.label}</span> <AiOutlineCheck/></div>
                )
            })}
        </div>
    )
}
