import { splitCamelCase } from '../../../utils';
import { ReactNode } from 'react';

export function selectTitle(dataField?: string | number | symbol, title?: ReactNode): ReactNode | undefined {
    if (title !== undefined) return title;
    if (dataField) {
        if (typeof dataField === 'string') return splitCamelCase(dataField);
        else return dataField.toString();
    }
    return undefined;
}
