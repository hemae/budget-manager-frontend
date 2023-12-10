import React, {MouseEventHandler, useCallback, useState} from 'react'
import {ConfirmationModalProps} from './interfaces'
import {Button} from '@shared/UI'
import {useNotify} from '../Notify'
import {getApiError} from '@shared/api'
import {useCloseClassName} from '../Modal'
import {useKeyDown} from '@shared/react'
import './ConfirmationModal.scss'

export const ConfirmationModal: React.FC<ConfirmationModalProps> = (props) => {

    const {
        id,
        onClose,
        confirmationHandler,
        message,
        buttonLabel = 'Ok',
        successMessage,
        additionalButtons,
    } = props

    useCloseClassName({id, className: 'feature-confirmation-modal__close'})

    const notify = useNotify()

    const [confirmation, setConfirmation] = useState<boolean>(false)

    const submitClick = useCallback(async () => {
        try {
            setConfirmation(true)
            await confirmationHandler()
            if (successMessage) {
                notify.success(successMessage)
            }
            onClose?.()
        } catch (e: any) {
            notify.error(getApiError(e))
        } finally {
            setConfirmation(false)
        }
    }, [confirmationHandler, onClose, successMessage])

    useKeyDown({onDown: submitClick, keyName: 'Enter'})

    return (
        <div className='feature-confirmation-modal'>
            <div className='feature-confirmation-modal__header'>
                <h3 className='feature-confirmation-modal__title'>Confirm</h3>
            </div>
            <p className='feature-confirmation-modal__content'>{message}</p>
            <div className='feature-confirmation-modal__buttons-container'>
                {additionalButtons?.map((props, index) => {

                    const {
                        closeModal = true,
                        onClick,
                        ...buttonProps
                    } = props

                    const clickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
                        onClick?.(event)
                        if (closeModal) onClose?.()
                    }

                    return (
                        <Button
                            key={index}
                            onClick={clickHandler}
                            {...buttonProps}
                        />
                    )
                })}
                <Button
                    loading={confirmation}
                    onClick={submitClick}
                >{buttonLabel}</Button>
            </div>
        </div>
    )
}
