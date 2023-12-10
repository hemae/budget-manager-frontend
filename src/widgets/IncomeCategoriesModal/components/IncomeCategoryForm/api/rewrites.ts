import BudgetManagerAPI from '@shared/api'

export const {
    post: createIncomeCategory,
    putById: updateIncomeCategory,
    deleteById: deleteIncomeCategory,
} = BudgetManagerAPI.incomeCategory
