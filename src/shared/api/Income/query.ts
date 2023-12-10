import {UniqueId} from '../interfaces'

export interface IncomeGetQuery {
    page: number
    pageSize: number
    date: string
    projectId: UniqueId
}
