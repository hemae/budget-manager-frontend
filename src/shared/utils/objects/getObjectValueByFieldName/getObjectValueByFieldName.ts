import { Options } from './interfaces';

function getArrayIndexFromLabel(label: string, separator: string): [string, number] | null {
    if (label.includes(separator)) return null;
    if (label.includes('[') && label.includes(']')) {
        const [str, dirtIndex] = label.split('[');
        const strIndex = dirtIndex.replace(']', '');
        const numberIndex = +strIndex;
        if (Number.isNaN(numberIndex)) return null;
        return [str, numberIndex];
    }
    return null;
}

/** function returns value by field name with any nesting */
export function getObjectValueByFieldName(options: Options): any {
    const { object, fieldName, fieldNameSeparator = '.' } = options;

    if (!fieldName || !Object.keys(object).length) return undefined;

    if (typeof fieldName === 'symbol') return undefined;
    if (typeof fieldName === 'number') return object?.[fieldName];

    const splitFieldName = fieldName.split(fieldNameSeparator);
    if (!splitFieldName.length) return undefined;
    if (splitFieldName.find((el) => !el)) return undefined;

    let k = 0;
    let targetFieldName = splitFieldName[k];
    let remainedObject = object;

    while (!!targetFieldName) {
        const res = getArrayIndexFromLabel(targetFieldName, fieldNameSeparator);
        if (res !== null) {
            const [label, arrayIndex] = res;
            try {
                if (!Number.isNaN(+label)) {
                    remainedObject = remainedObject?.[+label]?.[arrayIndex];
                } else {
                    remainedObject = remainedObject?.[label]?.[arrayIndex];
                }
            } catch (_) {
                break;
            }
        } else {
            if (!Number.isNaN(+targetFieldName)) {
                remainedObject = remainedObject?.[+targetFieldName];
            } else {
                remainedObject = remainedObject?.[targetFieldName];
            }
        }
        k += 1;
        targetFieldName = splitFieldName[k];
    }

    if (targetFieldName !== undefined) return undefined;

    return remainedObject;
}
