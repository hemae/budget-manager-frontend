import { capitalize } from '../capitalize';

export function splitCamelCase(camelCase: string, capitalized?: 'start' | 'every-word'): string {
    let phrase = '';
    for (let i = 0; i < camelCase.length; i++) {
        if (camelCase.charCodeAt(i) <= 96 && camelCase.charCodeAt(i) >= 65) {
            phrase += ` ${camelCase[i]}`;
        } else {
            phrase += camelCase[i];
        }
    }
    phrase = phrase.trim().toLowerCase();
    if (!capitalized) return phrase;
    if (capitalized === 'start') return capitalize(phrase);
    return phrase
        .split(' ')
        .map((word) => capitalize(word))
        .join(' ');
}
