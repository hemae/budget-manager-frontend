import {Nullable, UniqueId} from '../interfaces'

export interface IncomeCategoryPostBody {
    name: string
    description?: Nullable<string>
    projectId: UniqueId
}

export interface IncomeCategoryPutByIdBody {
    name: string
    description?: Nullable<string>
}
