import {IAuthFormValues} from '../../interfaces'
import {EAuthFormFieldName} from '../../enums'
import {AuthenticateBody} from '@shared/api'

export function mapAuthFormValuesToAuthenticate(formValues: IAuthFormValues): AuthenticateBody {
    return {
        email: formValues[EAuthFormFieldName.email],
        password: formValues[EAuthFormFieldName.password],
    }
}
