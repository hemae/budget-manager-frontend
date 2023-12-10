import { TableColumn, TableRow } from '../interfaces';
import { getObjectValueByFieldName } from '../../../utils';
import { getPercentageWidth } from './getPercentageWidth';
import { getRowDataFromCallable } from './getRowDataFromCallable';
import { RenderedRow } from './interfaces';

export function mapTableDataToColumns(
    data: Record<string, any>[],
    columns: TableColumn[],
    flexParts: number,
    row: TableRow = { hover: false },
): RenderedRow[] {
    return data.map((item, index) => {
        const rowData = columns.map((column) => ({
            data:
                column.formatter?.(
                    getObjectValueByFieldName({
                        object: item,
                        fieldName: column.dataField,
                    }) ?? null,
                    item,
                    index,
                ) ??
                getObjectValueByFieldName({
                    object: item,
                    fieldName: column.dataField,
                }) ??
                null,
            style:
                typeof column.style === 'function'
                    ? {
                          ...getPercentageWidth(flexParts, column.flex),
                          ...column.style(
                              getObjectValueByFieldName({
                                  object: item,
                                  fieldName: column.dataField,
                              }),
                              item,
                              index,
                          ),
                      }
                    : {
                          ...getPercentageWidth(flexParts, column.flex),
                          ...column.style,
                      },
            className:
                typeof column.className === 'string'
                    ? column.className
                    : column.className?.(
                          getObjectValueByFieldName({
                              object: item,
                              fieldName: column.dataField,
                          }),
                          item,
                          index,
                      ),
        }));

        return {
            row: rowData,
            rowData: getRowDataFromCallable(row, item, index),
        };
    });
}
