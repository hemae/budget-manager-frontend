import {UserPutByIdBody} from '@shared/api'
import {IProfileFormValues} from '../../interfaces'

export function mapProfileFormValuesToUpdating(formValues: IProfileFormValues): UserPutByIdBody {
    return formValues
}
