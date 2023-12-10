import {SelectOption} from '../Select'

export interface SelectDropdownProps {
    /** shown options*/
    options: SelectOption[]
    /** current selected*/
    currentValue: any
    /** on select*/
    onSelect: (option: SelectOption) => void
    /** default: false, if need html option title on over*/
    optionTitle?: boolean
    /** additional class name*/
    className?: string
    /** default: 'Data is Empty', label displayed when no options*/
    noDataLabel?: string
}
