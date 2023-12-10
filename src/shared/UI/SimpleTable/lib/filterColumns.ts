import { TableColumn, ColumnsVisibleStateItem } from '../interfaces';

export function filterColumns(
    columns: TableColumn[],
    columnsVisibleState: ColumnsVisibleStateItem[] | null | undefined,
): TableColumn[] {
    if (!columnsVisibleState) return columns;
    const visibleColumnDataFields = columnsVisibleState
        .filter((columnVisibleState) => columnVisibleState.visible)
        .map((columnVisibleState) => columnVisibleState.dataField);
    return columns.filter((column) => visibleColumnDataFields.includes(column.dataField as string | number | symbol));
}
