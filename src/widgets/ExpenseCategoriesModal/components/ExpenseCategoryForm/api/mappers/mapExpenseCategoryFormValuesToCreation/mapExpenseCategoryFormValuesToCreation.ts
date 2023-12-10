import {IExpenseCategoryFormValues} from '../../interfaces'
import {EExpenseCategoryFormFieldName} from '../../enums'
import {ExpenseCategoryPostBody, UniqueId} from '@shared/api'

export function mapExpenseCategoryFormValuesToCreation(formValues: IExpenseCategoryFormValues, projectId: UniqueId): ExpenseCategoryPostBody {
    return {
        name: formValues[EExpenseCategoryFormFieldName.name],
        description: formValues[EExpenseCategoryFormFieldName.description] || undefined,
        projectId,
    }
}
