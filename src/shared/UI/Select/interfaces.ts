import React from 'react'
import {DropdownPlacement} from '../Dropdown'
import {InputProps} from '../Input'

export type SelectOption<T = any, E = any> = E & {
    value: T
    label: React.ReactNode
}

export type OnSelect = (value: string | null, option: SelectOption) => void

// @ts-ignore
export interface SelectProps extends InputProps {
    /** selected value*/
    currentValue: string | null
    /** options for selecting*/
    options: SelectOption[]
    /** on select option handler*/
    onSelect: OnSelect
    /** on change option handler*/
    onSelectChange?: OnSelect
    /** default: 'bottom'*/
    dropdownPlacement?: DropdownPlacement
    /** 'div' tag classname where select placed*/
    wrapperClassName?: string
    /** 'div' tag classname where input placed*/
    inputWrapperClassName?: string
    /** default: false, if need html option title on over*/
    optionTitle?: boolean
    /** default: false, if need search*/
    allowSearch?: boolean
    /** when searching*/
    onSearch?: (value: string) => void
    /** default: false*/
    allowClear?: boolean
    /** default: true, hide dropdown when selected*/
    hideOnSelect?: boolean
    /** default: false, when remote searching*/
    loading?: boolean
    /** additional class name for dropdown*/
    dropdownClassName?: string
    /** default: 'Data is Empty', label displayed when no options*/
    noDataLabel?: string
}
