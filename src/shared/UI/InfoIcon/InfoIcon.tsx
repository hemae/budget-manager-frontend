import React, {useId} from 'react'
import {InfoIconProps} from './interfaces'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import classNames from 'classnames'
import {Tooltip} from '../Tooltip'
import './InfoIcon.scss'

export const InfoIcon: React.FC<InfoIconProps> = (props) => {

    const {
        tooltip,
        className,
        style,
        placement = 'top'
    } = props

    const id = useId()

    return (
        <span
            style={style}
            className={classNames('ui-info-icon', className)}
        >
            <AiOutlineInfoCircle tooltip-data-id={id}/>
            <Tooltip
                id={id}
            >{tooltip}</Tooltip>
        </span>
    )
}
