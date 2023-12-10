import {EExpenseCategoryFormFieldName} from './enums'

export interface IExpenseCategoryFormValues {
    [EExpenseCategoryFormFieldName.name]: string
    [EExpenseCategoryFormFieldName.description]: string | undefined
}
