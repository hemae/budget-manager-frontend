import React, {MouseEventHandler, useCallback, useState} from 'react'
import {CheckboxProps} from './interfaces'
import {generateId} from '@shared/utils'
import {useElement} from '@shared/react'
import classNames from 'classnames'
import './Checkbox.scss'

export const Checkbox: React.FC<CheckboxProps> = (props) => {

    const {
        name,
        label,
        checked,
        onChange,
        className,
        disabled = false
    } = props

    const {target} = useElement<HTMLInputElement>()

    const wrapperClick = useCallback<MouseEventHandler>(() => {
        if (!disabled) target?.current?.click()
    }, [target, disabled])

    const [id] = useState<string>(generateId)

    const checkboxClick = useCallback<MouseEventHandler>(async (event) => {
        event?.stopPropagation()
        if (!disabled) await onChange?.()
    }, [onChange, disabled])

    return (
        <div
            className={classNames('ui-checkbox', 'non-selectable', {active: checked}, {disabled}, className)}
            onClick={wrapperClick}
        >
            <aside className='ui-checkbox__overlay'/>
            <input
                id={id}
                ref={target}
                name={name}
                type='checkbox'
                onClick={checkboxClick}
                checked={checked}
                className={classNames('ui-checkbox__input', {active: checked})}
                readOnly={true}
            />
            <label
                className='ui-checkbox__label'
                onClick={checkboxClick}
            >{label}</label>
        </div>
    )
}
