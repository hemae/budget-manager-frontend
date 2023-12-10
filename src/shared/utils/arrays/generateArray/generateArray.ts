import { generateDummyArray } from '../generateDummyArray';
import { Generator } from './interfaces';

export function generateArray<T = any>(count: number, cb: Generator): T[] {
    return generateDummyArray(count).map((_, index) => {
        return cb(index);
    });
}
