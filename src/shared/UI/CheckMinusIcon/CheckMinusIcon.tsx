import React from 'react'
import {FaMinus} from 'react-icons/fa'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {CheckMinusIconProps} from './interfaces'
import classNames from 'classnames'
import './CheckMinusIcon.scss'

export const CheckMinusIcon: React.FC<CheckMinusIconProps> = (props) => {

    const {
        value,
        className,
    } = props

    return (
        <div
            className={classNames(
                'ui-check-minus-icon',
                className,
                {minus: !value},
                {check: value},
            )}
        >
            {value ? <BsFillCheckCircleFill/> : <FaMinus/>}
        </div>
    )
}
