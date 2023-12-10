import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {ClearButtonProps} from './interfaces'
import classNames from 'classnames'
import './ClearButton.scss'

export const ClearButton: React.FC<ClearButtonProps> = ({className, onClick, dataTestId = 'clear-button'}) => {
    return <AiFillCloseCircle data-testid={dataTestId} className={classNames('ui-clear-button', className)} onClick={onClick}/>
}
