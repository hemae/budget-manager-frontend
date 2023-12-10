import React from 'react'
import {InfoIcon} from '../InfoIcon'
import {InfoLabelProps} from './interfaces'
import classNames from 'classnames'
import './InfoLabel.scss'

export const InfoLabel: React.FC<InfoLabelProps> = (props) => {

    const {
        label,
        tooltip,
        className,
        onClick
    } = props

    return (
        <label
            className={classNames('ui-info-label', className)}
            onClick={onClick}
        >
            <span>{label}</span>
            {tooltip && <InfoIcon tooltip={tooltip}/>}
        </label>
    )
}
