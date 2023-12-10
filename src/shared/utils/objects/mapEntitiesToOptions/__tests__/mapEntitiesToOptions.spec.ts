import { UniqueId } from "@shared/api"
import { SelectOption } from "@shared/UI";
import { mapEntitiesToOptions } from "../mapEntitiesToOptions";

interface TestEntity {
    id: UniqueId;
    name: string;
    description: string;
}

const entitiesToMap: TestEntity[] = [
    {
        id: '1',
        name: 'name_1',
        description: 'description_1'
    },
    {
        id: '2',
        name: 'name_2',
        description: 'description_2'
    },
    {
        id: '3',
        name: 'name_3',
        description: 'description_3'
    },
]

const expectedOptions: SelectOption<UniqueId>[] = [
    { label: 'name_1', value: '1' },
    { label: 'name_2', value: '2' },
    { label: 'name_3', value: '3' },
]

describe('mapEntitiesToOptions function', () => {
    it('mapEntitiesToOptions works properly', () => {
        expect(mapEntitiesToOptions(entitiesToMap)).toEqual(expectedOptions)
    })
})