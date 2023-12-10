import React from 'react'
import {Spinner} from '../Spinner'
import classnames from 'classnames'
import {LoaderProps} from './interfaces'
import './Loader.scss'

export const Loader: React.FC<React.PropsWithChildren<LoaderProps>> = (props) => {

    const {
        loading = false,
        children,
        style,
        contentWrapperClassName,
        wrapperClassName,
        loaderBoxClassName,
    } = props

    return (
        <div
            className={classnames(
                'ui-loader',
                wrapperClassName
            )}
        >
            <div
                className={contentWrapperClassName}
                style={style}
            >{children}</div>
            <div
                className={classnames(
                    'ui-loader__loader',
                    loaderBoxClassName,
                    {shown: loading}
                )}
            >
                <aside className={classnames('ui-loader__inner', {shown: loading})}/>
                <Spinner/>
            </div>
        </div>
    )
}

