import React from 'react'
import {
    Header,
    Main,
    Navbar,
} from './components'
import './Layout.scss'

export const Layout: React.FC<React.PropsWithChildren> = ({children}) => {

    return (
        <>
            <Navbar/>
            <div
                className='widget-layout'
            >
                <Header/>
                <Main>{children}</Main>
            </div>
        </>
    )
}
