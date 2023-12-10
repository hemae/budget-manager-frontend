import { TableCellData, TableColumn } from '../interfaces';
import { getPercentageWidth } from './getPercentageWidth';
import { selectTitle } from './selectTitle';

export function mapTableHeaderToColumns(columns: TableColumn[], flexParts: number): TableCellData[] {
    return columns.map((column) => ({
        data: column.headerFormatter
            ? column.headerFormatter(selectTitle(column.dataField, column.title) || '')
            : selectTitle(column.dataField, column.title) || '',
        style:
            typeof column.headerStyle === 'function'
                ? {
                      ...getPercentageWidth(flexParts, column.flex),
                      ...column.headerStyle(column.title),
                  }
                : {
                      ...getPercentageWidth(flexParts, column.flex),
                      ...column.headerStyle,
                  },
        className:
            typeof column.headerClassName === 'string'
                ? column.headerClassName
                : column.headerClassName?.(column.title),
    }));
}
