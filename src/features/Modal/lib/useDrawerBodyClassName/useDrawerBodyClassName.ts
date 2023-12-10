import {useEffect} from 'react'
import {useModal} from '../ModalProvider'

interface Options {
    id?: string
    className: string
}

export function useDrawerBodyClassName({id, className}: Options): void {
    const {setDrawerBodyClassName} = useModal()
    useEffect(() => {
        setDrawerBodyClassName(id || '', className)
    }, [setDrawerBodyClassName])
}
