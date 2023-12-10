import {IAuthFormValues} from '../../interfaces'
import {EAuthFormFieldName} from '../../enums'
import {RegisterBody} from '@shared/api'

export function mapAuthFormValuesToRegister(formValues: IAuthFormValues): RegisterBody {
    return {
        email: formValues[EAuthFormFieldName.email],
        password: formValues[EAuthFormFieldName.password],
    }
}
