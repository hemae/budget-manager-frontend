import React from 'react'
import {Card} from '@shared/UI'
import {OUT_TRANSITION_TIME} from './constants'
import classNames from 'classnames'
import {Close} from '../Close'
import {useModalRender, ModalWrapperProps} from '../../lib'
import './Popup.scss'

export const Popup: React.FC<ModalWrapperProps> = (props) => {

    const {
        close,
        Component,
        props: componentProps,
        modalId,
        closeClassName
    } = props

    const {
        closeClick,
        shown,
        onBodyClick
    } = useModalRender({close, outTransitionTime: OUT_TRANSITION_TIME})

    return (
        <div
            className='feature-modal-popup'
            onMouseDown={closeClick}
        >
            <Card
                className={classNames(
                    'feature-modal-popup__body',
                    {shown}
                )}
                onMouseDown={onBodyClick}
            >
                <Close close={closeClick} className={closeClassName}/>
                <Component {...componentProps} onClose={closeClick} id={modalId}/>
            </Card>
        </div>
    )
}
