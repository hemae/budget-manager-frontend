import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import {AiFillInfoCircle, AiFillExclamationCircle} from 'react-icons/ai'
import {BsFillExclamationTriangleFill} from 'react-icons/bs'
import {NotifyType} from '../../interfaces'

export const iconBase: Record<NotifyType, React.ReactNode> = {
    success: <FaCheckCircle className='feature-notify-notification__icon success'/>,
    error: <AiFillExclamationCircle className='feature-notify-notification__icon error'/>,
    warning: <BsFillExclamationTriangleFill className='feature-notify-notification__icon warning'/>,
    info: <AiFillInfoCircle className='feature-notify-notification__icon info'/>
}
