import React from 'react'
import {Routes as NativeRoutes, Route} from 'react-router-dom'
import {BlockNotFound} from '@widgets/BlockNotFound'
import AverageReportPage from '@pages/AverageReportPage'
import BudgetDayPage from '@pages/BudgetDayPage'
import ProjectsPage from '@pages/ProjectsPage'
import {useProjectsData} from '@entities/ProjectsDataProvider'

export const Routes: React.FC = () => {

    const {currentProject} = useProjectsData()

    return (
        <NativeRoutes>
            <Route
                path='/'
                element={<ProjectsPage/>}
            />
            {currentProject &&
                <>
                    <Route
                        path='/average-report'
                        element={<AverageReportPage/>}
                    />
                    <Route
                        path='/budget-day'
                        element={<BudgetDayPage/>}
                    />
                </>}
            <Route
                path='*'
                element={<BlockNotFound/>}
            />
        </NativeRoutes>
    )
}
