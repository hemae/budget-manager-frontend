export function removeDuplicates<T = any>(targetArray: T[]): T[] {
    return targetArray.reduce((acc, el) => {
        if (acc.includes(el)) return acc;
        return [...acc, el];
    }, [] as T[]);
}
