import { TableRow, TableRowData } from '../interfaces';
import { getFromCallable } from '../../../utils';

export const getRowDataFromCallable = <Dto>(row: TableRow<Dto>, item: Dto, index: number): TableRowData => {
    return {
        onClick: getFromCallable(row.onClick, item, index),
        className: getFromCallable(row.className, item, index),
        style: getFromCallable(row.style, item, index),
        hover: getFromCallable(row.hover, item, index),
    };
};
