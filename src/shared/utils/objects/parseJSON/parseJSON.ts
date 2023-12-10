export function parseJSON<T = any>(json: string, log: boolean = false): T | null {
    try {
        return JSON.parse(json) as T;
    } catch (e) {
        if (log) console.error('Cannot parse string: ', json, e);
        return null;
    }
}
