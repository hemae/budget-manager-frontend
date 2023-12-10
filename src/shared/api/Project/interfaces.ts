import {UniqueId, Nullable, EntityBase, DateOnly} from '../interfaces'

export interface ProjectResponse extends EntityBase {
    name: string
    description: Nullable<string>
    color: Nullable<string>
    founderUserId: UniqueId
    assignedUserIds: UniqueId[]
    adminUserIds: UniqueId[]
    settlementDate: DateOnly
}

export interface ProjectDeleteByIdResponse {
    id: UniqueId
}
