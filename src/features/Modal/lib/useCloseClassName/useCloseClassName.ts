import {useEffect} from 'react'
import {useModal} from '../ModalProvider'

interface Options {
    id?: string
    className: string
}

export function useCloseClassName({id, className}: Options): void {
    const {setCloseClassName} = useModal()
    useEffect(() => {
        setCloseClassName(id || '', className)
    }, [setCloseClassName])
}
