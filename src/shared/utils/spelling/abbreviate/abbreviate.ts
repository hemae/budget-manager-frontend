export function abbreviate(phrase: string): string {
    return phrase
        .split(' ')
        .map((word) => word.slice(0, 1))
        .join('')
        .toUpperCase();
}
