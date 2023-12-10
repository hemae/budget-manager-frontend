import React, {useCallback} from 'react'
import {useModal} from '../ModalProvider'
import {ModalType} from '../../interfaces'

export interface Returned<T extends Record<string, any> = any> {
    open: (props: T) => void
}

export const useModalGeneralForPublic = <T extends Record<string, any> = any>(Component: React.FC<T>, type: ModalType, queryName?: string): Returned => {

    const {pushModal} = useModal()

    const open = useCallback((props: T) => {
        pushModal({type, Component, props, queryName})
    }, [pushModal, Component, queryName])

    return {open}
}
