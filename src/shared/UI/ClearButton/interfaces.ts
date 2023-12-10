import {MouseEventHandler} from 'react'

export interface ClearButtonProps {
    /** additional class name*/
    className?: string
    /** click handler*/
    onClick?: MouseEventHandler | (() => void)
    /** data-testid for testing-library*/
    dataTestId?: string
}
