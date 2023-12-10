import {EProfileFormFieldName} from './enums'

export interface IProfileFormValues {
    [EProfileFormFieldName.firstName]: string | undefined,
    [EProfileFormFieldName.lastName]: string | undefined,
    [EProfileFormFieldName.preferredCurrencyId]: string | undefined,
}
