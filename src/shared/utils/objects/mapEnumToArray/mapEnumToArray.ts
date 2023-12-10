export const mapEnumToArray = <T extends Record<keyof T, T[keyof T]> = any>(targetEnum: T): T[keyof T][] => {
    return Object.keys(targetEnum) as T[keyof T];
};
