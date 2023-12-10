import {createContext, Dispatch, SetStateAction} from 'react'
import {ProjectResponse} from '@shared/api'
import {emptyFunc} from '@shared/react'

export interface IProjectsCategoriesDataContext {
    projects: ProjectResponse[]
    projectsLoading: boolean
    projectsHandleRefresh: () => void
    currentProject: ProjectResponse | null
    setCurrentProject: Dispatch<SetStateAction<ProjectResponse | null>>
}

export const ProjectsDataContext = createContext<IProjectsCategoriesDataContext>({
    projects: [],
    projectsLoading: false,
    projectsHandleRefresh: emptyFunc,
    currentProject: null,
    setCurrentProject: emptyFunc,
})
