import React from 'react'
import {SpinnerProps} from './interfaces'
import classNames from 'classnames'
import './Spinner.scss'

export const Spinner: React.FC<SpinnerProps> = (props) => {

    const {
        scale = 1,
        className
    } = props;

    return (
        <div
            className={classNames(
                'ui-spinner',
                className,
            )}
            style={{transform: `scale(${scale})`}}
        >
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}
