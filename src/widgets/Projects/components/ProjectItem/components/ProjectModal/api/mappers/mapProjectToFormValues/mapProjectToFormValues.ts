import {ProjectResponse} from '@shared/api'
import {IProjectFormValues} from '../../interfaces'
import {EProjectFormFieldName} from '../../enums'

export function mapProjectToFormValues(project: ProjectResponse): IProjectFormValues {
    return {
        [EProjectFormFieldName.name]: project.name,
        [EProjectFormFieldName.description]: project.description || undefined,
        [EProjectFormFieldName.color]: project.color || undefined,
        [EProjectFormFieldName.assignedUserIds]: project.assignedUserIds,
        [EProjectFormFieldName.adminUserIds]: project.adminUserIds,
        [EProjectFormFieldName.settlementDate]: project.settlementDate,
    }
}
