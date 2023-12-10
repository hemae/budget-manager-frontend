import { reverseString } from '../reverseString';

export function getSingleForm(word: string): string {
    const reversed = reverseString(word);
    if (reversed.startsWith('sei')) return reverseString(reversed.slice(3)) + 'y';
    if (reversed.startsWith('ses')) return reverseString(reversed.slice(2));
    return reverseString(reversed.slice(1));
}
