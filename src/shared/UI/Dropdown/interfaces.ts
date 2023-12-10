import React, {Dispatch, SetStateAction} from 'react'

export type DropdownPlacement = 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right'

export interface DropdownProps {
    /** default: 'bottom'*/
    dropdownPlacement?: DropdownPlacement
    /** dropdown options from useDropdown hook*/
    dropdownOptions: DropdownOptions
    /** additional class name*/
    className?: string
}

export interface DropdownOptions {
    dropDownToggle: () => void
    dropdownShown: boolean
    setDropdownShown: Dispatch<SetStateAction<boolean>>
    onDropDownMouseOver: React.MouseEventHandler
    onDropdownMouseLeave: React.MouseEventHandler
}
