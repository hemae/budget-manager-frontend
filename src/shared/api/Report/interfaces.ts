import {DateOnly} from '../interfaces'

export interface ReportRow<D> {
    date: D
    expensesByCategory: Record<string, number>
    incomesByCategory: Record<string, number>
    averageExpensePerDay: Record<string, number>
    averageIncomePerDay: Record<string, number>
}

export interface ReportResponse {
    results: ReportRow<DateOnly>[]
    totalRow: ReportRow<null>
    currency: string
    needToGetPerMonth: number
    gotPerCurrentMonth: number
}

export interface ReportForCurrentDateResponse {
    totalRemainder: number
    remainderOfCurrentDate: number
    totalExpenseOfCurrentDate: number
    totalIncomeOfCurrentDate: number
    totalOfCurrentDate: number
    totalRemainderOfCurrentDate: number
}

export interface ReportRemaindersByCurrenciesResponse extends Record<string, number> {
}
