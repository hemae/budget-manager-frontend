import {IExpenseCategoryFormValues} from '../../interfaces'
import {EExpenseCategoryFormFieldName} from '../../enums'
import {ExpenseCategoryPutByIdBody} from '@shared/api'

export function mapExpenseCategoryFormValuesToUpdating(formValues: IExpenseCategoryFormValues): ExpenseCategoryPutByIdBody {
    return {
        name: formValues[EExpenseCategoryFormFieldName.name],
        description: formValues[EExpenseCategoryFormFieldName.description] || undefined,
    }
}
