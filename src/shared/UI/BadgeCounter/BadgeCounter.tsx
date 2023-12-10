import React, {useEffect, useState} from 'react'
import {BadgeCounterProps} from './interfaces'
import classNames from 'classnames'
import './BadgeCounter.scss'

export const BadgeCounter: React.FC<React.PropsWithChildren<BadgeCounterProps>> = (props) => {

    const {
        children,
        count,
        placement = 'top-left'
    } = props

    const [rendered, setRendered] = useState<boolean>(false)

    useEffect(() => {
        if (count !== null) setTimeout(() => setRendered(true), 100)
        else setRendered(false)
    }, [count])

    if (count === null) return <>{children}</>

    return (
        <div className='ui-badge-counter'>
            {children}
            <span
                className={classNames(
                    'ui-badge-counter__counter',
                    placement,
                    {rendered}
                )}
            >{count}</span>
        </div>
    )
}
