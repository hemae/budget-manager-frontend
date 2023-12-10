import React, {useCallback, useState} from 'react'
import {Overlay, Drawer, Popup} from '../../components'
import {IModalContext, ModalContext} from './ModalContext'
import {Modal, PushModal, ModalWrapperProps} from './interfaces'
import {useQuery} from '@shared/react'
import {generateId} from '@shared/utils'
import {ModalType} from '../../interfaces'

const wrappers: Record<ModalType, React.FC<ModalWrapperProps>> = {
    drawer: Drawer,
    modal: Popup
}

export const ModalProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const [_, setQuery] = useQuery()

    const [renderedModals, setRenderedModals] = useState<Modal[]>([])

    const removeModal = useCallback(() => {
        setRenderedModals(prev => {
            const queryName = prev[prev.length - 1]?.queryName
            if (queryName) setQuery(queryName, '')
            return prev.slice(0, prev.length - 1)
        })
    }, [])

    const pushModal = useCallback<PushModal>((options) => {
        const {type, Component, props, queryName} = options
        if (queryName) setQuery(queryName, true)
        const Wrapper = wrappers[type]
        const targetComponent: React.FC<ModalWrapperProps> = (wrapperProps) => {
            return <Wrapper {...wrapperProps}/>
        }
        setRenderedModals(prev => [...prev, {
            Modal: targetComponent,
            queryName,
            id: generateId(),
            Component,
            props
        }])
    }, [])

    const setCloseClassName = useCallback((modalId: string, closeClassName: string) => {
        setRenderedModals(prev => prev.map(m => modalId === m.id ? {
            ...m,
            closeClassName
        } : m))
    }, [])

    const setDrawerBodyClassName = useCallback((modalId: string, drawerBodyClassName: string) => {
        setRenderedModals(prev => prev.map(m => modalId === m.id ? {
            ...m,
            drawerBodyClassName
        } : m))
    }, [])

    const value: IModalContext = {
        pushModal,
        removeModal,
        setCloseClassName,
        setDrawerBodyClassName,
    }

    return (
        <ModalContext.Provider
            value={value}
        >
            {children}
            <Overlay rendered={!!renderedModals.length}/>
            {renderedModals.map((options) => {
                const {Modal, id, Component, props, closeClassName, drawerBodyClassName} = options
                return (
                    <Modal
                        key={id}
                        close={removeModal}
                        Component={Component}
                        props={props}
                        modalId={id}
                        closeClassName={closeClassName}
                        drawerBodyClassName={drawerBodyClassName}
                    />
                )
            })}
        </ModalContext.Provider>
    )
}
