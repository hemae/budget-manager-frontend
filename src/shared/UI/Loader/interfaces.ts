import React from 'react'

export interface LoaderProps {
    /** shows loader when true*/
    loading?: boolean
    /** */
    style?: React.CSSProperties
    /** content wrapper class name*/
    contentWrapperClassName?: string
    /** general wrapper class name*/
    wrapperClassName?: string
    /** loader box class name*/
    loaderBoxClassName?: string
}