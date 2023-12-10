import {UserResponse} from '@shared/api'
import {IProfileFormValues} from '../../interfaces'
import {EProfileFormFieldName} from '../../enums'

export function mapUserToFormValues(user: UserResponse | null): IProfileFormValues {
    return {
        [EProfileFormFieldName.firstName]: user?.firstName || undefined,
        [EProfileFormFieldName.lastName]: user?.lastName || undefined,
        [EProfileFormFieldName.preferredCurrencyId]: user?.preferredCurrencyId || undefined,
    }
}
