import React, {MouseEventHandler, useCallback, useState} from 'react'
import {OUT_TRANSITION_TIME} from './constants'
import {useModalRender, ModalWrapperProps} from '../../lib'
import classNames from 'classnames'
import {Close} from '../Close'
import {ExpandButton} from './ExpandButton'
import './Drawer.scss'

export const Drawer: React.FC<ModalWrapperProps> = (props) => {

    const {
        close,
        Component,
        props: componentProps,
        modalId,
        closeClassName,
        drawerBodyClassName,
    } = props

    const {
        shown,
        closeClick,
        onBodyClick
    } = useModalRender({close, outTransitionTime: OUT_TRANSITION_TIME})

    const [expanded, setExpanded] = useState<boolean>(false)

    const onExtend = useCallback<MouseEventHandler>((event) => {
        event?.stopPropagation()
        setExpanded(prev => !prev)
    }, [])

    const onClose = useCallback(() => {
        if (expanded) {
            setExpanded(false)
            setTimeout(() => closeClick(), 50)
        }
        closeClick()
    }, [closeClick, expanded])

    return (
        <div
            className={classNames(
                'feature-modal-drawer',
                {shown}
            )}
        >
            <section
                className={classNames(
                    'feature-modal-drawer__body',
                    drawerBodyClassName,
                    {expanded}
                )}
                onClick={onBodyClick}
            >
                <Close close={onClose} className={closeClassName}/>
                <ExpandButton expanded={expanded} onClick={onExtend}/>
                <Component {...componentProps} onClose={closeClick} id={modalId}/>
            </section>
        </div>
    )
}
