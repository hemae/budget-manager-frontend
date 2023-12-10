import React from 'react'
import {Spinner} from '@shared/UI'
import './Authenticating.scss'

export const Authenticating: React.FC<React.PropsWithChildren> = () => {

    return (
        <div
            className='entities-auth-authenticating'
        >
            <h1
                className='entities-auth-authenticating__title'
            >Authenticating</h1>
            <Spinner/>
        </div>
    )
}
