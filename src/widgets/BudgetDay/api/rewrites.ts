import BudgetManagerAPI from '@shared/api'

export const {
    expense: {get: getExpenses},
    income: {get: getIncomes},
} = BudgetManagerAPI

export const {
    getForCurrentDate: getReportForCurrentDate,
} = BudgetManagerAPI.report
