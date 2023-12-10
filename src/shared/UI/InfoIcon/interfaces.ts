import React from 'react'

export interface InfoIconProps {
    /** tooltip label*/
    tooltip: string
    /** default: 'top'*/
    placement?: 'top' | 'bottom' | 'auto' | 'right' | 'left'
    /** additional class name*/
    className?: string
    /** additional styles */
    style?: React.CSSProperties
}
