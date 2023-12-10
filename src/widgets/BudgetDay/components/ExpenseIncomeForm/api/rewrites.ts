import BudgetManagerAPI from '@shared/api'

export const {
    expense: {
        post: createExpense,
        putById: updateExpense,
        deleteById: deleteExpense,
    },
    income: {
        post: createIncome,
        putById: updateIncome,
        deleteById: deleteIncome,
    },
} = BudgetManagerAPI
