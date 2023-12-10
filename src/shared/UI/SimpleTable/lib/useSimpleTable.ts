import { useMemo } from 'react';
import { TableCellData, TableColumn, TableRow, ColumnsVisibleStateItem } from '../interfaces';
import { mapTableDataToColumns } from './mapTableDataToColumns';
import { mapTableHeaderToColumns } from './mapTableHeaderToColumns';
import { filterColumns } from './filterColumns';
import { getFlexParts } from './getFlexParts';
import { RenderedRow } from './interfaces';

interface Options {
    data: Record<string, any>[];
    columns: TableColumn[];
    row?: TableRow;
    columnsVisibleState?: ColumnsVisibleStateItem[] | null;
}

interface Returned {
    renderedHeader: TableCellData[];
    renderedRows: RenderedRow[];
}

export function useSimpleTable(options: Options): Returned {
    const { data, columns: rawColumns, row, columnsVisibleState } = options;

    const columns = useMemo(() => filterColumns(rawColumns, columnsVisibleState), [rawColumns, columnsVisibleState]);

    const flexParts = useMemo(() => getFlexParts(columns), [columns]);

    const renderedHeader = useMemo<TableCellData[]>(() => {
        return mapTableHeaderToColumns(columns, flexParts);
    }, [columns, flexParts]);

    const renderedRows = useMemo<RenderedRow[]>(() => {
        return mapTableDataToColumns(data, columns, flexParts, row);
    }, [data, columns, row, flexParts]);

    return {
        renderedHeader,
        renderedRows,
    };
}
