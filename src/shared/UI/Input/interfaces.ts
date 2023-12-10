import React, {MouseEventHandler} from 'react'

type InputSize = 'small' | 'medium' | 'large'

// @ts-ignore
export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /** default: 'medium', input Size*/
    inputSize?: InputSize
    /** Left icon into input*/
    prefixIcon?: React.ReactNode
    /** Right icon into input*/
    suffixIcon?: React.ReactNode
    /** Left icon action. Icon becomes interactive when onPrefixIconClick is not undefined*/
    onPrefixIconClick?: MouseEventHandler | (() => void)
    /** Right icon action. Icon becomes interactive when onPrefixIconClick is not undefined*/
    onSuffixIconClick?: MouseEventHandler | (() => void)
    /** 'div' tag classname where input placed*/
    wrapperClassName?: string
    /** handler when wrapper clicked*/
    onWrapperClick?: React.MouseEventHandler<HTMLDivElement>
    /** additional label*/
    label?: string
    /** displayed with info icon*/
    infoTooltip?: string
    /** default: false; if google color scheme*/
    google?: boolean
    /** when validation allowed*/
    feedback?: string | null
    /** default: false, textarea*/
    textarea?: boolean
    value?: React.ReactNode | string | number | readonly string[]
}