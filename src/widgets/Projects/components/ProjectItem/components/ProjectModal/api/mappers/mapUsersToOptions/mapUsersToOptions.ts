import {UserResponse} from '@shared/api'
import {IUserOption} from '../../interfaces'

export function mapUsersToOptions(users: UserResponse[]): IUserOption[] {
    return users.map(user => ({
        value: user._id,
        label: [user.email, user.firstName, user.lastName].filter(el => !!el).join(' ')
    }))
}
