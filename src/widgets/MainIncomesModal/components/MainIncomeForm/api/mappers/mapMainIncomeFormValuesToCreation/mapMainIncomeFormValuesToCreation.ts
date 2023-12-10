import {IMainIncomeFormValues} from '../../interfaces'
import {EMainIncomeFormFieldName} from '../../enums'
import {MainIncomePostBody, UniqueId} from '@shared/api'

export function mapMainIncomeFormValuesToCreation(formValues: IMainIncomeFormValues, projectId: UniqueId): MainIncomePostBody {
    return {
        name: formValues[EMainIncomeFormFieldName.name],
        value: +formValues[EMainIncomeFormFieldName.value],
        currencyId: formValues[EMainIncomeFormFieldName.currencyId],
        date: formValues[EMainIncomeFormFieldName.date],
        projectId,
    }
}
