import {EIncomeCategoryFormFieldName} from './enums'

export interface IIncomeCategoryFormValues {
    [EIncomeCategoryFormFieldName.name]: string
    [EIncomeCategoryFormFieldName.description]: string | undefined
}
