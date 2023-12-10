import {UniqueId, Nullable, EntityBase} from '../interfaces'

export interface IncomeCategoryResponse extends EntityBase {
    name: string
    projectId: UniqueId
    description: Nullable<string>
}

export interface IncomeCategoryDeleteByIdResponse {
    id: UniqueId
}
