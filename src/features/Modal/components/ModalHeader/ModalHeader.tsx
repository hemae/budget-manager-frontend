import React from 'react'
import {SimpleHeader} from '@shared/UI'
import classNames from 'classnames'
import './ModalHeader.scss'

export interface ModalHeaderProps {
    /** Title og header*/
    headerTitle?: React.ReactNode
    /** Link to info source*/
    infoLink?: string
    /** default: true, openSourceInNewTab = true opens source page in new tab*/
    openSourceInNewTab?: boolean
    /** header block class name*/
    className?: string
    /** header title class name (tag h2)*/
    headerClassName?: string
    /** info link class name*/
    infoLinkClassName?: string
}

export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {

    const {
        headerTitle,
        infoLink,
        openSourceInNewTab,
        className,
        headerClassName,
        infoLinkClassName
    } = props

    return (
        <SimpleHeader
            headerTitle={headerTitle}
            infoLink={infoLink}
            openSourceInNewTab={openSourceInNewTab}
            className={classNames('feature-modal-popup-header', className)}
            headerClassName={headerClassName}
            infoLinkClassName={infoLinkClassName}
        />
    )
}
