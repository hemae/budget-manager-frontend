import {ModalProps} from '../Modal'
import {ButtonProps} from '@shared/UI'

export interface ConfirmationModalProps extends ModalProps {
    /** handler when 'Ok' was pressed*/
    confirmationHandler: (() => void) | (() => Promise<void>)
    message: string
    /** default: 'Ok'*/
    buttonLabel?: string
    successMessage?: string
    /** additional buttons props*/
    additionalButtons?: (ButtonProps & {
        /** default: true*/
        closeModal?: boolean
    })[]
}
