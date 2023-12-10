import {Nullable, UniqueId} from '../interfaces'

export interface ExpenseCategoryPostBody {
    name: string
    description?: Nullable<string>
    projectId: UniqueId
}

export interface ExpenseCategoryPutByIdBody {
    name: string
    description?: Nullable<string>
}
