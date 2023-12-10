import React from 'react'

type ButtonSize = 'small' | 'medium' | 'large'
type ButtonKind = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /** Loading flag*/
    loading?: boolean
    /** Size selector*/
    size?: ButtonSize
    /** default 'primary'*/
    kind?: ButtonKind
}
