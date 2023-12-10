import React from 'react'
import {ModalType} from '../../interfaces'

interface PushModalOptions<T> {
    type: ModalType
    Component: React.FC<T>
    props: T,
    queryName?: string
}

export type PushModal = <T extends Record<string, any> = any>(options: PushModalOptions<T>) => void

export type SetCloseClassName = (modalId: string, closeClassName: string) => void

export type SetDrawerBodyClassName = (modalId: string, drawerBodyClassName: string) => void

export interface ModalWrapperProps {
    close: () => void
    Component: React.FC<any>
    props: any
    modalId: string
    closeClassName?: string
    drawerBodyClassName?: string
}

export interface Modal {
    Modal: React.FC<ModalWrapperProps>
    Component: React.FC<any>
    props: any
    queryName?: string
    id: string
    closeClassName?: string
    drawerBodyClassName?: string
}
