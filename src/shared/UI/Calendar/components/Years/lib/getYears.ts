export function getYears(viewYear: number): number[] {
    let years: number[] = []
    for (let year = viewYear - 8; year < viewYear + 7; year++) {
        years.push(year)
    }
    return years
}
