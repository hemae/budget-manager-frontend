import React, {MouseEventHandler} from 'react'

export interface InfoLabelProps {
    label?: React.ReactNode
    tooltip?: string
    /** additional class name*/
    className?: string
    /** click handler*/
    onClick?: MouseEventHandler | (() => void)
}
