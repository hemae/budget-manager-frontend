import React, {useCallback, useState} from 'react'
import {INotifyContext, NotifyContext} from './NotifyContext'
import {InternalNotifyOptions} from './interfaces'
import {NotifyOptions} from '../../interfaces'
import {generateId} from '@shared/utils'
import {Notification} from '../../components'
import classNames from 'classnames'
import './NotificationsBlock.scss'

export const NotifyProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const [notifications, setNotifications] = useState<InternalNotifyOptions[]>([])

    const pushNotification = useCallback((options: NotifyOptions) => {
        setNotifications(prev => [...prev, {
            ...options,
            id: generateId()
        }])
    }, [])

    const removeNotification = useCallback((id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id))
    }, [])

    const value: INotifyContext = {
        pushNotification,
    }

    return (
        <NotifyContext.Provider
            value={value}
        >
            {children}
            <section
                className={classNames(
                    'feature-notify-notifications-block',
                    {none: !notifications.length}
                )}
            >
                {notifications.map(({id, type, text, title}) => {
                    return (
                        <Notification
                            key={id}
                            type={type}
                            text={text}
                            title={title}
                            id={id}
                            remove={removeNotification}
                        />
                    )
                })}
            </section>
        </NotifyContext.Provider>
    )
}
