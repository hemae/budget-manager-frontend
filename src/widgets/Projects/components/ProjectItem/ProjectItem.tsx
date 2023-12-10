import React, {useMemo} from 'react'
import {ProjectResponse} from '@shared/api'
import {ProjectModal} from './components'
import {useModal} from '@features/Modal'
import {ConfirmationModal} from '@features/ConfirmationModal'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import {Button} from '@shared/UI'
import {FaTimes, FaPlus, FaPen} from 'react-icons/fa'
import {useAuth} from '@entities/AuthProvider'
import {deleteProject} from './api'
import './ProjectItem.scss'
import classNames from 'classnames'

interface ProjectItemProps {
    project?: ProjectResponse
}

export const ProjectItem: React.FC<ProjectItemProps> = (props) => {

    const {
        project,
    } = props

    const {user} = useAuth()

    const {
        currentProject,
        setCurrentProject,
        projectsHandleRefresh,
    } = useProjectsData()

    const isAdmin = useMemo(() => user && project && project.adminUserIds.includes(user?._id), [project, user])

    const isFounder = useMemo(() => project?.founderUserId === user?._id, [project, user])

    const {open: openProjectModal} = useModal(ProjectModal)

    const {open: openDeleteConfirmationModal} = useModal(ConfirmationModal)

    const onProjectClick = () => {
        if (project) setCurrentProject(project)
    }

    const onProjectEditClick: React.MouseEventHandler = (event) => {
        event.stopPropagation()
        if (isAdmin) openProjectModal({project})
    }

    const onProjectCreateClick = () => {
        openProjectModal({})
    }

    const onDelete = async () => {
        if (project) {
            await deleteProject({id: project._id})
            projectsHandleRefresh()
        }
    }

    const onProjectDeleteClick: React.MouseEventHandler = (event) => {
        event.stopPropagation()
        if (isAdmin && isFounder) {
            openDeleteConfirmationModal({
                confirmationHandler: onDelete,
                message: `Do you really want to delete project «${project?.name}»?`,
                successMessage: 'Yes',
            })
        }
    }

    const onProjectBodyClick = () => {
        if (project) onProjectClick()
        else onProjectCreateClick()
    }

    return (
        <div
            className={classNames(
                'widget-projects-item',
                {current: project && project._id === currentProject?._id}
            )}
        >
            <div
                className='widget-projects-item__body'
                onClick={onProjectBodyClick}
            >
                {project && <span className='widget-projects-item__name'>{project.name}</span>}
                {project && project._id === currentProject?._id &&
                    <span className='widget-projects-item__current'>Current</span>}
                {!project && <FaPlus/>}
            </div>
            {isFounder &&
                <div
                    className='widget-projects-item__menu'
                >
                    <Button
                        onClick={onProjectEditClick}
                    ><FaPen/></Button>
                    <Button
                        onClick={onProjectDeleteClick}
                        kind='secondary'
                    ><FaTimes/></Button>
                </div>}
        </div>
    )
}
