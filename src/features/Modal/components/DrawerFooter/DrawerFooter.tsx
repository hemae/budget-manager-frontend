import React from 'react'
import classNames from 'classnames'
import './DrawerFooter.scss'

interface DrawerFooterProps {
    className?: string
}

export const DrawerFooter: React.FC<React.PropsWithChildren<DrawerFooterProps>> = (props) => {

    const {
        children,
        className,
    } = props

    return (
        <div
            className={classNames('feature-modal-drawer-footer', className)}
        >{children}</div>
    )
}
