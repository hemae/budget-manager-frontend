import BudgetManagerAPI from '@shared/api'

export const {
    get: getCurrencies,
    getConversion,
    refreshHard: refreshCurrencies,
} = BudgetManagerAPI.currency
