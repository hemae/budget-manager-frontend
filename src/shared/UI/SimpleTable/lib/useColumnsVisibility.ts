import { Dispatch, SetStateAction, useState } from 'react';
import { ColumnsVisibleStateItem, TableColumn } from '../interfaces';
import { selectTitle } from './selectTitle';

interface Options {
    columns: TableColumn[];
    showColumnsControl: boolean;
}

interface Returned {
    columnsVisibleState: ColumnsVisibleStateItem[] | null;
    setColumnsVisibleState: Dispatch<SetStateAction<ColumnsVisibleStateItem[] | null>>;
}

export function useColumnsVisibility(options: Options): Returned {
    const { columns, showColumnsControl } = options;

    const [columnsVisibleState, setColumnsVisibleState] = useState<ColumnsVisibleStateItem[] | null>(
        showColumnsControl
            ? columns.map((column) => ({
                  dataField: column.dataField as string,
                  title: selectTitle(column.dataField, column.title) || '',
                  visible: column.defaultVisible ?? true,
              }))
            : null,
    );

    return {
        columnsVisibleState,
        setColumnsVisibleState,
    };
}
