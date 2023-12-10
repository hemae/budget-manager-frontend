import React from 'react'
import {Loader} from '../Loader'
import {AppLoaderProps} from './interfaces'
import classNames from 'classnames'
import './AppLoader.scss'

export const AppLoader: React.FC<AppLoaderProps> = ({className}) => {
    return (
        <Loader loading>
            <div className={classNames('ui-app-loader', className)}/>
        </Loader>
    )
}
