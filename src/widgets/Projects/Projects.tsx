import React from 'react'
import {ProjectItem} from './components'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import {Card, Loader} from '@shared/UI'
import './Projects.scss'

export const Projects: React.FC = () => {

    const {
        projects,
        projectsLoading,
    } = useProjectsData()

    return (
        <Loader
            loading={projectsLoading}
        >
            <Card
                className='widget-projects'
            >
                {projects.map(project => {
                    return (
                        <ProjectItem
                            key={project._id}
                            project={project}
                        />
                    )
                })}
                <ProjectItem key='0'/>
            </Card>
        </Loader>
    )
}
