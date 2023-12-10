import React from 'react'
import {BadgeProps} from './interfaces'
import classNames from 'classnames'
import './Badge.scss'

export const Badge: React.FC<React.PropsWithChildren<BadgeProps>> = (props) => {

    const {
        children,
        type = 'default',
        className
    } = props

    return (
        <div
            className={classNames(
                'ui-badge',
                type,
                className
            )}
        >{children}</div>
    )
}
