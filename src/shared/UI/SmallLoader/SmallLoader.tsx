import React from 'react'
import {SmallLoaderProps} from './interfaces'
import classNames from 'classnames'
import './SmallLoader.scss'

export const SmallLoader: React.FC<SmallLoaderProps> = ({className}) => {
    return (
        <div className={classNames('ui-small-loader', className)}>
            <div className='ui-small-loader__spinner'/>
        </div>
    )
}
