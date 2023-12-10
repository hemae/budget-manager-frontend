import React, {MouseEventHandler, useCallback} from 'react'
import {SwitcherProps} from './inrefaces'
import classNames from 'classnames'
import './Switcher.scss'

export const Switcher: React.FC<SwitcherProps> = (props) => {

    const {
        checked,
        onChange,
        className,
        disabled = false
    } = props

    const onClick = useCallback<MouseEventHandler>(() => {
        if (!disabled) onChange?.(!checked)
    }, [checked, onChange, disabled])

    return (
        <div
            className={classNames(
                'ui-switcher',
                className,
                {checked},
                {disabled}
            )}
            onClick={onClick}
        >
            <div
                className={classNames(
                    'ui-switcher__slider',
                    {checked},
                    {disabled}
                )}
            />
        </div>
    )
}
