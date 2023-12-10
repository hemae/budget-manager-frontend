import {IIncomeCategoryFormValues} from '../../interfaces'
import {EIncomeCategoryFormFieldName} from '../../enums'
import {IncomeCategoryPostBody, UniqueId} from '@shared/api'

export function mapIncomeCategoryFormValuesToCreation(formValues: IIncomeCategoryFormValues, projectId: UniqueId): IncomeCategoryPostBody {
    return {
        name: formValues[EIncomeCategoryFormFieldName.name],
        description: formValues[EIncomeCategoryFormFieldName.description] || undefined,
        projectId,
    }
}
