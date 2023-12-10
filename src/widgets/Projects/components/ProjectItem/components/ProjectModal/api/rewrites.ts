import BudgetManagerAPI from '@shared/api'

export const {
    post: createProject,
    putById: updateProject,
} = BudgetManagerAPI.project

export const {
    get: getUsers,
} = BudgetManagerAPI.user
