import {IMainIncomeFormValues} from './interfaces'
import {EMainIncomeFormFieldName} from './enums'
import {UniqueId} from '@shared/api'

export function getInitialMainIncomeFormValues(userPreferredCurrencyId: UniqueId | null, usdId: UniqueId | null): Partial<IMainIncomeFormValues> {
    return {
        [EMainIncomeFormFieldName.currencyId]: userPreferredCurrencyId || usdId || undefined,
    }
}
