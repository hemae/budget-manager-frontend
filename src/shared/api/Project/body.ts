import {DateOnly, Nullable, UniqueId} from '../interfaces'

export interface ProjectPostBody {
    name: string
    description?: Nullable<string>
    color?: Nullable<string>
    settlementDate: DateOnly
}

export interface ProjectPutByIdBody {
    name: string
    description?: Nullable<string>
    color?: Nullable<string>
    assignedUserIds: UniqueId[]
    adminUserIds: UniqueId[]
    settlementDate: DateOnly
}
