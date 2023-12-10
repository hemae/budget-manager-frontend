import React from 'react'
import {Card, Loader} from '@shared/UI'
import './SuspenseLoader.scss'

export const SuspenseLoader: React.FC = () => {
    return (
        <Loader loading>
            <Card className='feature-suspense-loader'/>
        </Loader>
    )
}
