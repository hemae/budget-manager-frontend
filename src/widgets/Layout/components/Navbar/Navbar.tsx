import React from 'react'
import {Menu} from './components'
import './Navbar.scss'

export const Navbar: React.FC = () => {

    return (
        <nav
            className='widget-layout-navbar'
        >
            <Menu/>
        </nav>
    )
}
