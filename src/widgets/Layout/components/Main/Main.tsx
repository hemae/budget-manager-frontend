import React from 'react'
import './Main.scss'

export const Main: React.FC<React.PropsWithChildren> = ({children}) => {

    return (
        <main
            className='widget-layout-main'
        >
            {children}
        </main>
    )
}
