import React, { useMemo } from 'react';
import { TableCellData } from '../../interfaces';
import { Td, Th, TdProps, ThProps } from './interfaces';
import classNames from 'classnames';
import './TableCell.scss';

interface TableCellRecordProps {
    cellData?: TableCellData;
    isHeader?: boolean;
}

export const TableCell: React.FC<TableCellRecordProps> = (props) => {
    const { cellData, isHeader } = props;

    const TargetElement = useMemo<Th | Td>(() => {
        if (isHeader)
            return (props: ThProps) => (
                <th
                    {...props}
                    className={classNames('ui-simple-table-cell header', props.className)}
                />
            );
        return (props: TdProps) => (
            <td
                {...props}
                className={classNames('ui-simple-table-cell data', props.className)}
            />
        );
    }, [isHeader]);

    return (
        <TargetElement
            style={cellData?.style}
            className={cellData?.className}
        >
            {cellData?.data}
        </TargetElement>
    );
};
