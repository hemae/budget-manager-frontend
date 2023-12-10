import {EAuthFormFieldName} from './enums'

export interface IAuthFormValues {
    [EAuthFormFieldName.email]: string
    [EAuthFormFieldName.password]: string
    [EAuthFormFieldName.passwordConfirmation]: string | undefined
}
