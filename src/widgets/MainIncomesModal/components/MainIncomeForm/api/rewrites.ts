import BudgetManagerAPI from '@shared/api'

export const {
    post: createMainIncome,
    putById: updateMainIncome,
    deleteById: deleteMainIncome,
} = BudgetManagerAPI.mainIncome
