import {IMainExpenseFormValues} from './interfaces'
import {EMainExpenseFormFieldName} from './enums'
import {UniqueId} from '@shared/api'

export function getInitialMainExpenseFormValues(userPreferredCurrencyId: UniqueId | null, usdId: UniqueId | null): Partial<IMainExpenseFormValues> {
    return {
        [EMainExpenseFormFieldName.currencyId]: userPreferredCurrencyId || usdId || undefined,
    }
}
