import {IMainExpenseFormValues} from '../../interfaces'
import {EMainExpenseFormFieldName} from '../../enums'
import {MainExpensePutByIdBody} from '@shared/api'

export function mapMainExpenseFormValuesToUpdating(formValues: IMainExpenseFormValues): MainExpensePutByIdBody {
    return {
        name: formValues[EMainExpenseFormFieldName.name],
        value: +formValues[EMainExpenseFormFieldName.value],
        currencyId: formValues[EMainExpenseFormFieldName.currencyId],
        date: formValues[EMainExpenseFormFieldName.date],
    }
}
