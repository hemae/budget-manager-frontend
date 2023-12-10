import React from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {InfoLinkProps} from './interfaces'
import classNames from 'classnames'
import './InfoLink.scss'

export const InfoLink: React.FC<InfoLinkProps> = (props) => {

    const {
        className,
        url,
        theSameTab = false,
    } = props

    return (
        <a
            target={theSameTab ? undefined : '_blank'}
            className={classNames('ui-info-link', className)}
            href={url}
            rel='help'
        ><AiOutlineInfoCircle/></a>
    )
}
