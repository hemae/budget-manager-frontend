import {EProjectFormFieldName} from './enums'

export interface IProjectFormValues {
    [EProjectFormFieldName.name]: string
    [EProjectFormFieldName.description]: string | undefined
    [EProjectFormFieldName.color]: string | undefined
    [EProjectFormFieldName.assignedUserIds]: string[] | undefined
    [EProjectFormFieldName.adminUserIds]: string[] | undefined
    [EProjectFormFieldName.settlementDate]: string
}

export interface IUserOption {
    value: string
    label: string
}
