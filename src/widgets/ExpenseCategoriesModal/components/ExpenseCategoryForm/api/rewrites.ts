import BudgetManagerAPI from '@shared/api'

export const {
    post: createExpenseCategory,
    putById: updateExpenseCategory,
    deleteById: deleteExpenseCategory,
} = BudgetManagerAPI.expenseCategory
