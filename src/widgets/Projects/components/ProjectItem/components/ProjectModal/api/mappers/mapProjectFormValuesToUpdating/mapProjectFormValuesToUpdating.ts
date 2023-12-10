import {IProjectFormValues} from '../../interfaces'
import {EProjectFormFieldName} from '../../enums'
import {ProjectPutByIdBody} from '@shared/api'

export function mapProjectFormValuesToUpdating(formValues: IProjectFormValues): ProjectPutByIdBody {
    return {
        name: formValues[EProjectFormFieldName.name],
        description: formValues[EProjectFormFieldName.description],
        color: formValues[EProjectFormFieldName.color],
        assignedUserIds: formValues[EProjectFormFieldName.assignedUserIds]!,
        adminUserIds: formValues[EProjectFormFieldName.adminUserIds]!,
        settlementDate: formValues[EProjectFormFieldName.settlementDate],
    }
}
