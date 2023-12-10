export function generateDummyArray<Blank = null>(count: number, blank: any = null): Blank[] {
    return Array.from({ length: count }, () => blank);
}
