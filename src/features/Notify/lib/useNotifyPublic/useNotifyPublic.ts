import {useCallback} from 'react'
import {NotifyType} from '../../interfaces'
import {useNotify} from '../NotifyProvider'

type NotifyHandler = (text: string, title?: string) => void

interface Returned extends Record<NotifyType, NotifyHandler>{
}

export function useNotifyPublic(): Returned {

    const {pushNotification} = useNotify()

    const success = useCallback<NotifyHandler>((text, title) => {
        pushNotification({text, title, type: 'success'})
    }, [pushNotification])

    const error = useCallback<NotifyHandler>((text, title) => {
        pushNotification({text, title, type: 'error'})
    }, [pushNotification])

    const info = useCallback<NotifyHandler>((text, title) => {
        pushNotification({text, title, type: 'info'})
    }, [pushNotification])

    const warning = useCallback<NotifyHandler>((text, title) => {
        pushNotification({text, title, type: 'warning'})
    }, [pushNotification])

    return {
        success,
        error,
        info,
        warning
    }
}