import {UniqueId} from '../interfaces'

export interface IncomeCategoryGetQuery {
    page: number
    pageSize: number
    projectId: UniqueId
}
