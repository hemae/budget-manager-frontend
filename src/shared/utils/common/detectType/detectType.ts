/**
 * function convert string value to typed value, for example 'true' -> true (boolean)
 * */

export function detectType(stringValue: string): string | number | true | false | null {
    if (!stringValue) return '';
    if (!Number.isNaN(+stringValue)) return +stringValue;
    if (stringValue === 'true') return true;
    if (stringValue === 'false') return false;
    if (stringValue === 'null') return null;
    return stringValue;
}
