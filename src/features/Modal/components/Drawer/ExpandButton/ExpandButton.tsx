import React, {MouseEventHandler} from 'react'
import {AiOutlineDoubleLeft} from 'react-icons/ai'
import classNames from 'classnames'
import './ExpandButton.scss'

interface ExpandButtonProps {
    expanded: boolean
    onClick: MouseEventHandler
}

export const ExpandButton: React.FC<ExpandButtonProps> = (props) => {

    const {
        expanded,
        onClick
    } = props

    return (
        <button
            id='extend-button'
            className='feature-modal-drawer-expand-button'
            onClick={onClick}
        >
            <AiOutlineDoubleLeft
                className={classNames(
                    'feature-modal-drawer-expand-button__chevrove',
                    {expanded}
                )}
            />
        </button>
    )
}
