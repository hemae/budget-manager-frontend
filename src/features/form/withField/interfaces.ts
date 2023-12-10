import {InputProps} from '@shared/UI'
// @ts-ignore
import {FieldValidator, UseFieldConfig} from 'react-final-form'

// @ts-ignore
export interface FiledProps extends InputProps, UseFieldConfig<any> {
    /** validation handler*/
    validate?: FieldValidator<any>
    /** required html property*/
    name: string
}
