import React from 'react'
import {Card} from '../Card'
import {ErrorBlockProps} from './interfaces'
import './ErrorBlock.scss'

export const ErrorBlock: React.FC<ErrorBlockProps> = (props) => {

    const {
        header,
        body,
        errorCode
    } = props

    return (
        <Card>
            <div className='ui-error-block'>
                <div className='ui-error-block__header'>
                    <h2>{header}</h2>
                </div>
                <div className='ui-error-block__body'>
                    {body}
                </div>
                <div className='ui-error-block__footer'>
                    <h3>ERROR {errorCode}</h3>
                </div>
            </div>
        </Card>
    )
}
