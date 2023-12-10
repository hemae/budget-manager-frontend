import React from 'react'
import {TagProps} from './interfaces'
import {ClearButton} from '../ClearButton'
import classNames from 'classnames'
import './Tag.scss'

export const Tag: React.FC<React.PropsWithChildren<TagProps>> = (props) => {

    const {
        onRemove,
        children,
        className
    } = props

    return (
        <div
            className={classNames(
                'ui-tag',
                className
            )}
        >
            {children}
            {onRemove &&
                <ClearButton
                    className='ui-tag__clear-button'
                    onClick={onRemove}
                />}
        </div>
    )
}
