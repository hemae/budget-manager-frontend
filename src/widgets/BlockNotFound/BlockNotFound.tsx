import React from 'react'
import {ErrorBlock} from '@shared/UI'
import {NavLink} from 'react-router-dom'

export const BlockNotFound: React.FC = () => {
    const body = (
        <>
            <h2>This page does not exist</h2>
            <NavLink
                to='/'
                className='ui-button primary ui-button_medium'
            >
                Let's try that again
            </NavLink>
        </>
    )

    return (
        <ErrorBlock
            header='Not Found'
            body={body}
            errorCode={404}
        />
    )
}
