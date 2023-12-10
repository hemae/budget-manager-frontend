import {getTableColumn, TableColumn} from '@shared/UI'
import {IReportTableData} from '../api'

export function getAverageReportTableColumns(): TableColumn<IReportTableData>[] {

    return [
        getTableColumn({
            dataField: 'categoryName',
            firstColumn: true,
        }),
        getTableColumn({
            dataField: 'averageValue',
            lastColumn: true,
        })
    ]
}
