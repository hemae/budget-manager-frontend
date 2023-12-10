import {ReportResponse} from '@shared/api'
import {IReportTableData} from '../../interfaces'

export function mapReportResponseToTableData(averageReport: ReportResponse['totalRow'], kind: 'averageExpensePerDay' | 'averageIncomePerDay'): IReportTableData[] {
    if (!Object.keys(averageReport[kind]).length) return []
    const tableData: IReportTableData[] = Object
        .keys(averageReport[kind])
        .filter(categoryName => categoryName !== 'other' && categoryName !== 'total')
        .map(categoryName => ({
            categoryName,
            averageValue: averageReport[kind][categoryName] ? Math.round(averageReport[kind][categoryName] * 100) / 100 : 0,
        }))
    tableData.push(
        {
            categoryName: 'total',
            averageValue: averageReport[kind]['total'] ? Math.round(averageReport[kind]['total'] * 100) / 100 : 0,
        }
    )
    return tableData
}
