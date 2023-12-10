import {DropdownPlacement} from '../Dropdown'
import {SingleCalendarProps} from '../Calendar'
import {InputProps} from '../Input'

export interface DateSelectProps extends InputProps, SingleCalendarProps {
    /** default: 'bottom'*/
    dropdownPlacement?: DropdownPlacement
    /** 'div' tag classname where input placed*/
    wrapperClassName?: string
    /** 'div' tag classname where input placed*/
    inputWrapperClassName?: string
    /** format date (moment style)*/
    format?: string
    /** default: false*/
    allowClear?: boolean
    /** default: true, hide dropdown when selected*/
    hideOnSelect?: boolean
}
