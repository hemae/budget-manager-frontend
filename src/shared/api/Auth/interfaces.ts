import {EntityBase, Nullable, UniqueId} from '../interfaces'
import {EUserRole} from '../enums'

export interface AuthenticateResponse extends EntityBase {
    firstName: Nullable<string>
    lastName: Nullable<string>
    email: string
    password: string
    role: EUserRole
    preferredCurrencyId: Nullable<UniqueId>
    jwt: string
}

export interface RegisterResponse extends EntityBase {
    firstName: Nullable<string>
    lastName: Nullable<string>
    email: string
    password: string
    role: EUserRole
    preferredCurrencyId: Nullable<UniqueId>
    jwt: string
}

export interface TokenResponse extends EntityBase {
    firstName: Nullable<string>
    lastName: Nullable<string>
    email: string
    password: string
    role: EUserRole
    preferredCurrencyId: Nullable<UniqueId>
    jwt: string
}
