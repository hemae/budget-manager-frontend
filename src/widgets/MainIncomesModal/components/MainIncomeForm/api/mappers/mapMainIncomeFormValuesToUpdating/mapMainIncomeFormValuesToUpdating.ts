import {IMainIncomeFormValues} from '../../interfaces'
import {EMainIncomeFormFieldName} from '../../enums'
import {MainIncomePutByIdBody} from '@shared/api'

export function mapMainIncomeFormValuesToUpdating(formValues: IMainIncomeFormValues): MainIncomePutByIdBody {
    return {
        name: formValues[EMainIncomeFormFieldName.name],
        value: +formValues[EMainIncomeFormFieldName.value],
        currencyId: formValues[EMainIncomeFormFieldName.currencyId],
        date: formValues[EMainIncomeFormFieldName.date],
    }
}
