import React, {useEffect, useState} from 'react'
import {ProjectsDataContext, IProjectsCategoriesDataContext} from './ProjectsDataContext'
import {
    getProjects,
} from './api'
import {useAsyncData} from '@shared/react'
import {useErrorNotify} from '@features/useErrorNotify'
import {ProjectResponse} from '@shared/api'
import {projectIdCookieFieldName} from './lib'
import jsCookie from 'js-cookie'

export const ProjectsDataProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const [currentProject, setCurrentProject] = useState<ProjectResponse | null>(null)

    useEffect(() => {
        if (currentProject) jsCookie.set(projectIdCookieFieldName, currentProject._id)
    }, [currentProject])

    const {
        data: projects,
        loading: projectsLoading,
        error: projectsError,
        handleRefresh: projectsHandleRefresh,
    } = useAsyncData(async () => {
        const {results} = await getProjects({
            page: 1,
            pageSize: 1_000,
        })
        const targetCookieProject = results.find(project => project._id === jsCookie.get(projectIdCookieFieldName))
        setCurrentProject(targetCookieProject || results[0] || null)
        return results
    }, [], [])

    useErrorNotify(projectsError, 'projects')

    const value: IProjectsCategoriesDataContext = {
        projects,
        projectsLoading,
        projectsHandleRefresh,
        currentProject,
        setCurrentProject,
    }

    return (
        <ProjectsDataContext.Provider
            value={value}
        >
            {children}
        </ProjectsDataContext.Provider>
    )
}
