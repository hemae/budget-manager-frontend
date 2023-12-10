import React, {MouseEventHandler, useCallback, useRef, useState} from 'react'
import {InputProps} from './interfaces'
import classNames from 'classnames'
import {InfoLabel} from '../InfoLabel'
import './Input.scss'

export const Input: React.FC<InputProps> = (props) => {

    const {
        inputSize = 'medium',
        prefixIcon,
        suffixIcon,
        onPrefixIconClick,
        onSuffixIconClick,
        wrapperClassName,
        className,
        onFocus,
        onBlur,
        disabled,
        onWrapperClick: externalOnWrapperClick,
        label,
        infoTooltip,
        google = false,
        feedback,
        placeholder,
        value,
        textarea = false,
        ...rest
    } = props

    const valueIsNode = !(typeof value === 'string' || typeof value === 'number' || !value)

    const input = useRef<HTMLInputElement>(null)

    const [focus, setFocus] = useState<boolean>(false)

    const onWrapperClick = useCallback<React.MouseEventHandler<HTMLDivElement>>((event) => {
        input?.current?.focus()
        externalOnWrapperClick?.(event)
    }, [input, externalOnWrapperClick])

    const onInputFocus = useCallback<React.FocusEventHandler<HTMLInputElement>>((event) => {
        onFocus?.(event)
        setFocus(true)
    }, [onFocus])

    const onInputBlur = useCallback<React.FocusEventHandler<HTMLInputElement>>((event) => {
        onBlur?.(event)
        setFocus(false)
    }, [onBlur])

    const labelClick = useCallback<MouseEventHandler>((event) => {
        if (focus) event?.stopPropagation()
    }, [focus])

    return (
        <div className='ui-input-wrapper'>
            <div
                className={classNames(
                    'ui-input',
                    wrapperClassName,
                    {focus},
                    {disabled},
                    {invalid: !!feedback}
                )}
                onClick={onWrapperClick}
            >
                {label &&
                    <InfoLabel
                        label={label}
                        tooltip={infoTooltip}
                        className={classNames(
                            'ui-input__label',
                            {google},
                            inputSize,
                            {active: focus || value},
                            {iconLeft: prefixIcon},
                            {textarea}
                        )}
                        onClick={labelClick}
                    />}
                {prefixIcon &&
                    <aside
                        className={classNames(
                            'ui-input__icon prefix',
                            {focus},
                            inputSize,
                            {interactive: !!onPrefixIconClick}
                        )}
                        onClick={onPrefixIconClick}
                    >{prefixIcon}</aside>}
                {!textarea && !valueIsNode &&
                    <input
                        {...rest}
                        ref={input}
                        autoComplete='off'
                        className={classNames(
                            'ui-input__input',
                            inputSize,
                            {focus},
                            className
                        )}
                        value={value as string | readonly string[] | undefined}
                        onFocus={onInputFocus}
                        onBlur={onInputBlur}
                        disabled={disabled}
                        placeholder={google && label ? '' : placeholder}
                    />}
                {!textarea && valueIsNode && value}
                {textarea &&
                    <textarea
                        {...rest}
                        //@ts-ignore
                        ref={input}
                        className={classNames(
                            'ui-input__input',
                            inputSize,
                            {focus},
                            className,
                            {textarea}
                        )}
                        value={value as string | readonly string[] | undefined}
                        //@ts-ignore
                        onFocus={onInputFocus}
                        //@ts-ignore
                        onBlur={onInputBlur}
                        disabled={disabled}
                        placeholder={google && label ? '' : placeholder}
                    />}
                {suffixIcon &&
                    <aside
                        className={classNames(
                            'ui-input__icon suffix',
                            inputSize,
                            {focus},
                            {interactive: !!onSuffixIconClick}
                        )}
                        onClick={onSuffixIconClick}
                    >{suffixIcon}</aside>}
            </div>
            {feedback !== undefined && <span className='ui-input-wrapper__feedback'>{feedback || ''}</span>}
        </div>
    )
}
