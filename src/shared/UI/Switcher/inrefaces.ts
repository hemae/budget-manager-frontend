export interface SwitcherProps {
    /** checked flag*/
    checked?: boolean
    /** change handler*/
    onChange?: (value: boolean) => void
    /** additional class name*/
    className?: string
    /** default: false*/
    disabled?: boolean
}