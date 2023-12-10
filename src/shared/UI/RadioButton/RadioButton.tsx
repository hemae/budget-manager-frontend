import React, {MouseEventHandler, useCallback} from 'react'
import {RadioButtonProps} from './interfaces'
import {useElement} from '@shared/react'
import './RadioButton.scss'

export const RadioButton: React.FC<RadioButtonProps> = (props) => {

    const {
        name,
        value,
        label,
        checked,
    } = props

    const {target} = useElement<HTMLInputElement>()

    const wrapperClick = useCallback<MouseEventHandler>(() => {
        target?.current?.click()
    }, [target])

    return (
        <div
            className='ui-radio-button'
            onClick={wrapperClick}
        >
            <input
                ref={target}
                id={value}
                name={name}
                value={value}
                type='radio'
                checked={checked}
                className='ui-radio-button__input'
                readOnly={true}
            />
            <label
                htmlFor={value}
                className='ui-radio-button__label'
            >
                {label}
            </label>
        </div>
    )
}
