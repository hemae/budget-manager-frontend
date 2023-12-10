import { UniqueId } from "@shared/api"
import { SelectOption } from "@shared/UI"


export const mapEntitiesToOptions = (items: any[], labelKey: string = 'name', valueKey: string = 'id'): SelectOption<UniqueId>[] => {
    return items.map(s => ({label: s[labelKey], value: s[valueKey]}))
}