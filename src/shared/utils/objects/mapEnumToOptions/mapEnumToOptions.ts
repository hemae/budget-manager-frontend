import { SelectOption } from '@shared/UI';
import {splitCamelCase} from '../../spelling'

export const mapEnumToOptions = <T extends Record<keyof T, T[keyof T]> = any>(targetEnum: T, splitLabel = false): SelectOption<T>[] => {
    return Object.keys(targetEnum).map((key) => ({
        value: targetEnum[key as keyof T],
        label: splitLabel ? splitCamelCase(targetEnum[key as keyof T], 'every-word') : targetEnum[key as keyof T],
    }));
};
