import {UniqueId, Nullable, EntityBase} from '../interfaces'

export interface ExpenseCategoryResponse extends EntityBase {
    name: string
    projectId: UniqueId
    description: Nullable<string>
}

export interface ExpenseCategoryDeleteByIdResponse {
    id: UniqueId
}
