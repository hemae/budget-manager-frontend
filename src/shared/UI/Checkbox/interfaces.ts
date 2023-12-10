import React from 'react'

export interface CheckboxProps {
    id?: string
    /** html prop name*/
    name?: string
    /** aside label*/
    label?: React.ReactNode
    /** checked flag*/
    checked?: boolean
    /** change handler*/
    onChange?: (() => void) | (() => Promise<void>)
    /** additional class name*/
    className?: string
    /** default: false*/
    disabled?: boolean
}
