import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {FiX} from 'react-icons/fi'
import {NotifyType} from '../../interfaces'
import {capitalize} from '@shared/utils'
import {iconBase} from './iconBase'
import {NOTIFY_DURATION} from '../../lib/constants'
import {OUT_TRANSITION_TIME} from './constants'
import classNames from 'classnames'
import './Notification.scss'

interface NotificationProps {
    type: NotifyType
    title?: string
    text: string
    id: string
    remove: (id: string) => void
}

export const Notification: React.FC<NotificationProps> = (props) => {

    const {
        type,
        title,
        text,
        id,
        remove
    } = props

    const icon = iconBase[type]

    const [shown, setShown] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => setShown(true), 50)
        setTimeout(() => setShown(false), NOTIFY_DURATION)
        setTimeout(() => remove(id), NOTIFY_DURATION + OUT_TRANSITION_TIME)
    }, [id, remove])

    const removeClick = useCallback(() => {
        setShown(false)
        setTimeout(() => remove(id), OUT_TRANSITION_TIME)
    }, [id, remove])

    const titleLabel = useMemo(() => {
        if (title) return title
        if (type === 'info') return 'Information'
        return capitalize(type)
    }, [title, type])

    return (
        <div
            className={classNames(
                'feature-notify-notification',
                {shown},
                type
            )}
        >
            <FiX
                onClick={removeClick}
                className='feature-notify-notification__close'
            />
            <div className='feature-notify-notification__header'>
                {icon || null}
                <h2 className='feature-notify-notification__title'>{titleLabel}</h2>
            </div>
            <p className='feature-notify-notification__content'>{text}</p>
        </div>
    )
}
