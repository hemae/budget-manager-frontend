import {createContext} from 'react'
import {PushModal, SetCloseClassName, SetDrawerBodyClassName} from './interfaces'

export interface IModalContext {
    pushModal: PushModal
    removeModal: () => void
    setCloseClassName: SetCloseClassName
    setDrawerBodyClassName: SetDrawerBodyClassName
}

export const ModalContext = createContext<IModalContext>({
    pushModal: () => undefined,
    removeModal: () => undefined,
    setCloseClassName: () => undefined,
    setDrawerBodyClassName: () => undefined,
})
