import {Nullable, UniqueId} from '../interfaces'
import {EUserRole} from '../enums'

export interface UserPostBody {
    email: string
    password: string
    firstName?: Nullable<string>
    lastName?: Nullable<string>
    role?: Nullable<EUserRole>
    preferredCurrencyId?: Nullable<UniqueId>
}

export interface UserPutByIdBody {
    firstName?: Nullable<string>
    lastName?: Nullable<string>
    role?: Nullable<EUserRole>
    preferredCurrencyId?: Nullable<UniqueId>
}
