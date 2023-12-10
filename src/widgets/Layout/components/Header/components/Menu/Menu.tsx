import React from 'react'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import {NavLink} from 'react-router-dom'
import './Menu.scss'

export const Menu: React.FC = () => {

    const {
        currentProject,
    } = useProjectsData()

    return (
        <div
            className='widget-layout-header-menu'
        >
            {currentProject &&
                <span className='widget-layout-header-menu__current-project'>{currentProject.name}</span>}
            {currentProject &&
                <NavLink
                    to='/budget-day'
                    className='ui-button tertiary'
                >Day</NavLink>}
            {currentProject &&
                <NavLink
                    to='/average-report'
                    className='ui-button tertiary'
                >Report</NavLink>}
            <NavLink
                to='/'
                className='ui-button tertiary'
            >Projects</NavLink>
        </div>
    )
}
