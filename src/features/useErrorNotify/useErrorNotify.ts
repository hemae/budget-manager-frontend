import {useEffect} from 'react'
import {useNotify} from '../Notify'
import {getApiError} from '@shared/api'

export function useErrorNotify(error: any, entityName?: string): void {
    const notify = useNotify()
    useEffect(() => {
        if (error) notify.error(getApiError(error, entityName))
    }, [error, entityName])
}