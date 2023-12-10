import {ChangeEventHandler} from 'react'

export interface RadioButtonGroupProps {
    currentOption?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    /** options for selecting*/
    options: {value: any, label: string}[]
    /** current option*/
    value?: any
    defaultValue: any
    /** name of radio input group*/
    name?: string
    /** additional class name*/
    className?: string
}
