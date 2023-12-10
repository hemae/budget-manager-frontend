import React from 'react'
import classNames from 'classnames'
import {CardProps} from './interfaces'

export const Card: React.FC<CardProps> = (props) => {

    const {
        className,
        ...rest
    } = props

    return (
        <section
            className={classNames('ui-card', className)}
            {...rest}
        />
    )
}
