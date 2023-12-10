import React from 'react'
import {Currencies, Menu, Logout} from './components'
import './Header.scss'

export const Header: React.FC = () => {

    return (
        <header
            className='widget-layout-header'
        >
            <Menu/>
            <Currencies/>
            <Logout/>
        </header>
    )
}
