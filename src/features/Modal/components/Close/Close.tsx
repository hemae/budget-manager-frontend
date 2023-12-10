import React, {MouseEventHandler, useCallback} from 'react'
import {FiX} from 'react-icons/fi'
import classNames from 'classnames'
import './Close.scss'

interface CloseProps {
    close: () => void
    className?: string
}

export const Close: React.FC<CloseProps> = (props) => {

    const {
        close,
        className
    } = props

    const closeClick = useCallback<MouseEventHandler>((event) => {
        event?.stopPropagation()
        close()
    }, [close])

    return (
        <FiX
            id='close-modal'
            className={classNames('feature-modal-close', className)}
            onClick={closeClick}
        />
    )
}
