export interface ReportGetQuery {
    startDate: string
    endDate: string
    currencyId: string
    projectId: string
}

export interface ReportGetForCurrentDateQuery {
    date: string
    currencyId: string
    projectId: string
}

export interface ReportRemaindersByCurrenciesQuery {
    date: string
    projectId: string
}
