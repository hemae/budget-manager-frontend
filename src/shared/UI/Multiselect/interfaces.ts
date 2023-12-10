import {SelectOption} from '../Select'

export interface MultiselectProps {
    /** options to select */
    options: SelectOption[]
    initialValues?: string[]
    /** works when selected values change */
    onChange: (selected: string[]) => void
    /** when options fetching */
    loading?: boolean
    placeholder?: string
}
