export type BadgeType = 'default' | 'success' | 'danger'

export interface BadgeProps {
    /** default: 'default'*/
    type?: BadgeType
    /** additional class name*/
    className?: string
}
