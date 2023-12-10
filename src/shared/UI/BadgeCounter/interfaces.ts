type BadgeCounterPlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface BadgeCounterProps {
    /** displayed count*/
    count: number | null
    /** default: 'top-left'*/
    placement?: BadgeCounterPlacement
}
