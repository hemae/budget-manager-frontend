import React, {useMemo} from 'react'
import {ModalProps} from '@features/Modal'
import {Form, FormRenderProps, useForm} from 'react-final-form'
import {Button, DateSelect, OnDateSelect, SimpleHeader} from '@shared/UI'
import {InputField} from '@features/form'
import {getApiError, ProjectResponse} from '@shared/api'
import {
    createProject,
    EProjectFormFieldName,
    getUsers,
    IProjectFormValues,
    mapProjectFormValuesToCreation,
    mapProjectFormValuesToUpdating,
    mapProjectToFormValues,
    mapUsersToOptions,
    updateProject,
} from './api'
import {useNotify} from '@features/Notify'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import {Multiselect} from '@shared/UI/Multiselect'
import {useAsyncData} from '@shared/react'
import {useErrorNotify} from '@features/useErrorNotify'
import './ProjectModal.scss'
import {useAuth} from '@entities/AuthProvider'

interface ProjectModalProps extends ModalProps {
    project?: ProjectResponse
}

export const ProjectModal: React.FC<ProjectModalProps> = (props) => {

    const {
        project,
        onClose,
    } = props

    const {
        projectsHandleRefresh,
    } = useProjectsData()

    const initialValues: Partial<IProjectFormValues> = useMemo(() => {
        if (project) {
            return mapProjectToFormValues(project)
        }
        return {assignedUserIds: [], adminUserIds: []}
    }, [project])

    const notify = useNotify()

    const onSubmit = async (values: IProjectFormValues) => {
        try {
            if (project) {
                await updateProject({id: project._id}, mapProjectFormValuesToUpdating(values))
            } else {
                await createProject(mapProjectFormValuesToCreation(values))
            }
            projectsHandleRefresh()
            onClose?.()
        } catch (e: any) {
            notify.error(getApiError(e))
        }
    }

    return (
        <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={(props) => {
                return (
                    <Internal
                        {...props}
                        isEdit={!!project}
                        initialAssignedUserIds={initialValues.assignedUserIds || []}
                        initialAdminUserIds={initialValues.adminUserIds || []}
                    />
                )
            }}
        />
    )
}

interface InternalProps extends FormRenderProps<IProjectFormValues, Partial<IProjectFormValues>> {
    isEdit: boolean
    initialAssignedUserIds: string[]
    initialAdminUserIds: string[]
}

const Internal: React.FC<InternalProps> = (props) => {

    const {
        handleSubmit,
        isEdit,
        initialAssignedUserIds,
        initialAdminUserIds,
        values,
    } = props

    const {user} = useAuth()

    const {
        data: userOptions,
        loading: userOptionsLoading,
        error: userOptionsError,
    } = useAsyncData(async () => {
        const {results} = await getUsers({
            page: 1,
            pageSize: 10_000,
        })
        return mapUsersToOptions(results.filter(u => u._id !== user?._id))
    }, [], [user])

    useErrorNotify(userOptionsError, 'users')

    const form = useForm<IProjectFormValues>()

    const onAssignedUserIdsChange = (values: string[]) => {
        form.change(EProjectFormFieldName.assignedUserIds, values)
    }

    const onAdminUserIdsChange = (values: string[]) => {
        form.change(EProjectFormFieldName.adminUserIds, values)
    }

    const validateName = (value: string) => {
        if (!value) return ' '
        return undefined
    }

    const onDateSelect: OnDateSelect = (date) => {
        if (date) form.change(EProjectFormFieldName.settlementDate, date)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='widget-projects-item-modal'
        >
            <SimpleHeader
                headerTitle={isEdit ? 'Edit project' : 'Create project'}
            />
            <InputField
                name={EProjectFormFieldName.name}
                placeholder='Project name'
                validate={validateName}
            />
            <InputField
                name={EProjectFormFieldName.description}
                placeholder='Project description (optional)'
                textarea
            />
            <DateSelect
                currentValue={values[EProjectFormFieldName.settlementDate]}
                onDateSelect={onDateSelect}
                placeholder='Select settlement date'
                inputSize='large'
                format='MMM D, YYYY'
            />
            {isEdit &&
                <>
                    <Multiselect
                        placeholder='Select assigned users'
                        options={userOptions}
                        loading={userOptionsLoading}
                        onChange={onAssignedUserIdsChange}
                        initialValues={initialAssignedUserIds}
                    />
                    <Multiselect
                        placeholder='Select admins'
                        options={userOptions}
                        loading={userOptionsLoading}
                        onChange={onAdminUserIdsChange}
                        initialValues={initialAdminUserIds}
                    />
                </>}
            <Button
                type='submit'
            >Save</Button>
        </form>
    )

}
