import {UniqueId} from '../interfaces'

export interface ExpenseGetQuery {
    page: number
    pageSize: number
    date: string
    projectId: UniqueId
}
