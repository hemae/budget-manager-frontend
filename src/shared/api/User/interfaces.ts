import {UniqueId, Nullable, EntityBase} from '../interfaces'
import {EUserRole} from '../enums'

export interface UserResponse extends EntityBase {
    firstName: Nullable<string>
    lastName: Nullable<string>
    email: string
    password: string
    role: EUserRole
    preferredCurrencyId: Nullable<UniqueId>
}

export interface UserDeleteByIdResponse {
    id: UniqueId
}
