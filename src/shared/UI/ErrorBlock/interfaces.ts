import React from 'react'


export interface ErrorBlockProps {
    /** additional class name*/
    className?: string
    header?: React.ReactNode
    body?: React.ReactNode
    errorCode?: 401 | 403 | 404 | 500
}
