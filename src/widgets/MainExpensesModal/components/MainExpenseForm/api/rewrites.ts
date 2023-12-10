import BudgetManagerAPI from '@shared/api'

export const {
    post: createMainExpense,
    putById: updateMainExpense,
    deleteById: deleteMainExpense,
} = BudgetManagerAPI.mainExpense
