import {UniqueId} from '../interfaces'

export interface MainIncomeGetQuery {
    page: number
    pageSize: number
    date?: string
    projectId: UniqueId
}
