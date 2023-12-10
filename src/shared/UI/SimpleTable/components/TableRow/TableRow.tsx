import React from 'react';
import { TableCell } from '../TableCell';
import { TableCellData, TableRowData } from '../../interfaces';
import classNames from 'classnames';
import './TableRow.scss';

interface TableRowProps {
    isHeader?: boolean;
    dataSet: TableCellData[];
    rowData?: TableRowData;
}

export const TableRow: React.FC<TableRowProps> = (props) => {
    const { isHeader = false, dataSet, rowData = {} } = props;

    return (
        <tr
            {...rowData}
            className={classNames(
                'ui-simple-table-row',
                rowData.className,
                {isHeader},
                { hover: rowData.hover || !!rowData.onClick },
                { clickable: !!rowData.onClick },
            )}
        >
            {dataSet.map((cellData, index) => {
                return (
                    <TableCell
                        key={index}
                        cellData={cellData}
                        isHeader={isHeader}
                    />
                );
            })}
        </tr>
    );
};
