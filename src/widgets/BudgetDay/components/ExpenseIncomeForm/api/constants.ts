import {IExpenseIncomeFormValues} from './interfaces'
import {EExpenseIncomeFormFiledName} from './enums'
import {EExpenseIncomeKind} from '../../../api'
import {UniqueId} from '@shared/api'

export function getInitialExpenseIncomeFormValues(userPreferredCurrencyId: UniqueId | null, usdId: UniqueId | null): Partial<IExpenseIncomeFormValues> {
    return {
        [EExpenseIncomeFormFiledName.kind]: EExpenseIncomeKind.expense,
        [EExpenseIncomeFormFiledName.currencyId]: userPreferredCurrencyId || usdId || undefined,
    }
}
