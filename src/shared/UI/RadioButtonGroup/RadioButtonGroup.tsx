import React from 'react'
import {RadioButtonGroupProps} from './interfaces'
import classNames from 'classnames'
import {RadioButton} from '../RadioButton'
import './RadioButtonGroup.scss'

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = (props) => {

    const {
        name,
        value,
        defaultValue,
        options,
        onChange,
        className
    } = props

    return (
        <div
            className={classNames('ui-radio-button-group', className)}
            onChange={onChange}
            defaultValue={defaultValue}
        >
            {options.map(({value: val, label}) => {
                return (
                    <RadioButton
                        key={val}
                        value={val}
                        label={label}
                        checked={value === val}
                        name={name}
                    />
                )
            })}
        </div>
    )
}
