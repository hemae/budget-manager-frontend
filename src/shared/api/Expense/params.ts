import {UniqueId} from '../interfaces'

export interface ExpenseGetByIdParams {
    id: UniqueId
}

export interface ExpensePutByIdParams {
    id: UniqueId
}

export interface ExpenseDeleteByIdParams {
    id: UniqueId
}
