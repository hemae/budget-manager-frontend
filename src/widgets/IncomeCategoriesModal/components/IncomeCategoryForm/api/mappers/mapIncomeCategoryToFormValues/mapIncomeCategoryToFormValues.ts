import {IncomeCategoryResponse} from '@shared/api'
import {IIncomeCategoryFormValues} from '../../interfaces'
import {EIncomeCategoryFormFieldName} from '../../enums'

export function mapIncomeCategoryToFormValues(incomeCategory: IncomeCategoryResponse): IIncomeCategoryFormValues {
    return {
        [EIncomeCategoryFormFieldName.name]: incomeCategory.name,
        [EIncomeCategoryFormFieldName.description]: incomeCategory.description || undefined,
    }
}
