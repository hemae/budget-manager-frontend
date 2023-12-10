import { generateId } from '../generateId';

const uniqueIdsNumber = 1000;

describe('generateId function', () => {
    it('generateId generates unique ids', () => {
        const ids: string[] = [];
        for (let i = 0; i < uniqueIdsNumber; i++) {
            ids.push(generateId());
        }

        const uniqueIds = ids.reduce((res, id) => {
            if (res.includes(id)) return res;
            return [...res, id];
        }, [] as string[]);

        expect(uniqueIds).toHaveLength(ids.length);
    });
});
