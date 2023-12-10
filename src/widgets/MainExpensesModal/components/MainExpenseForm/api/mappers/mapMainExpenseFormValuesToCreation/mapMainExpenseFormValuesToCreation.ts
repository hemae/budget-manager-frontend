import {IMainExpenseFormValues} from '../../interfaces'
import {EMainExpenseFormFieldName} from '../../enums'
import {MainExpensePostBody, UniqueId} from '@shared/api'

export function mapMainExpenseFormValuesToCreation(formValues: IMainExpenseFormValues, projectId: UniqueId): MainExpensePostBody {
    return {
        name: formValues[EMainExpenseFormFieldName.name],
        value: +formValues[EMainExpenseFormFieldName.value],
        currencyId: formValues[EMainExpenseFormFieldName.currencyId],
        date: formValues[EMainExpenseFormFieldName.date],
        projectId,
    }
}
