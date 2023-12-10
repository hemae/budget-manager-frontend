import {useContext} from 'react'
import {ProjectsDataContext, IProjectsCategoriesDataContext} from './ProjectsDataContext'

export const useProjectsData = () => useContext<IProjectsCategoriesDataContext>(ProjectsDataContext)
