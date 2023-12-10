import {UniqueId} from '../interfaces'

export interface MainExpenseGetQuery {
    page: number
    pageSize: number
    date?: string
    projectId: UniqueId
}
