import {UniqueId} from '../interfaces'

export interface ExpenseCategoryGetQuery {
    page: number
    pageSize: number
    projectId: UniqueId
}
