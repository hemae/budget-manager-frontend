import { reverseString } from '../reverseString';

export function getPluralForm(word: string): string {
    const reversed = reverseString(word);
    if (reversed.startsWith('y')) return reverseString(reversed.slice(1)) + 'ies';
    if (reversed.startsWith('s')) return reverseString(reversed) + 'es';
    return reverseString(reversed) + 's';
}
