import {IIncomeCategoryFormValues} from '../../interfaces'
import {EIncomeCategoryFormFieldName} from '../../enums'
import {IncomeCategoryPutByIdBody} from '@shared/api'

export function mapIncomeCategoryFormValuesToUpdating(formValues: IIncomeCategoryFormValues): IncomeCategoryPutByIdBody {
    return {
        name: formValues[EIncomeCategoryFormFieldName.name],
        description: formValues[EIncomeCategoryFormFieldName.description] || undefined,
    }
}
