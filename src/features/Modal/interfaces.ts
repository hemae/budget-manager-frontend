export type ModalType = 'drawer' | 'modal'

export interface ModalProps {
    /** modal close handler*/
    onClose?: () => void
    /** modal id*/
    id?: string
}
