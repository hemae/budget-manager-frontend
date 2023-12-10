import React, {MouseEventHandler, useCallback, useRef} from 'react'
import classNames from 'classnames'
import {ButtonProps} from './interfaces'
import {SmallLoader} from '../SmallLoader'
import './Button.scss'

export const Button: React.FC<ButtonProps> = (props) => {

    const {
        className,
        loading,
        size = 'medium',
        children,
        disabled,
        kind = 'primary',
        onClick,
        ...rest
    } = props

    const button = useRef<HTMLButtonElement>(null)

    const onButtonClick = useCallback<MouseEventHandler<HTMLButtonElement>>((event) => {
        onClick?.(event)
        button?.current?.blur()
    }, [onClick, button])

    return (
        <button
            ref={button}
            className={classNames(
                'ui-button',
                `ui-button_${size}`,
                {loading},
                className,
                kind
            )}
            {...rest}
            onClick={onButtonClick}
            disabled={disabled || loading}
        >
            <SmallLoader
                className={classNames('ui-button__spinner', {loading})}
            />
            {children}
        </button>
    )
}
