import {OnSelect, SelectProps} from '@shared/UI'
// @ts-ignore
import {FieldValidator, UseFieldConfig} from 'react-final-form'

// @ts-ignore
export interface SelectFiledProps extends SelectProps, UseFieldConfig<any> {
    /** validation handler*/
    validate?: FieldValidator<any>
    /** required html property*/
    name: string
    onSelect?: OnSelect
    currentValue?: string | null
    onSelectChange?: OnSelect
}
