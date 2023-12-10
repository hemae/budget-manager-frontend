import {MouseEventHandler, useCallback, useEffect, useState} from 'react'
import {useKeyDown} from '@shared/react'

interface Options {
    close: () => void
    outTransitionTime: number
}

interface Returned {
    shown: boolean
    onBodyClick: MouseEventHandler
    closeClick: () => void
}

export function useModalRender(options: Options): Returned {

    const {
        close,
        outTransitionTime
    } = options

    const [shown, setShown] = useState<any>(null)

    useEffect(() => {
        setTimeout(() => setShown(true), 50)
    }, [])

    const onBodyClick: MouseEventHandler = (event) => {
        event?.stopPropagation()
    }

    const closeClick = useCallback(() => {
        setShown(false)
        setTimeout(() => {
            close()
        }, outTransitionTime)
    }, [close, outTransitionTime])

    useKeyDown({onDown: closeClick, keyName: 'Escape'})

    return {
        shown,
        onBodyClick,
        closeClick
    }
}