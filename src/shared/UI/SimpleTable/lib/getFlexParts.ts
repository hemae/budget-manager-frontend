import { TableColumn } from '../interfaces';

export function getFlexParts(columns: TableColumn[]): number {
    return columns.reduce((res, column) => res + (column.flex || 1), 0);
}
