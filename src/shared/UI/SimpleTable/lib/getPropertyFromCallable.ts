import { TableProperty } from '../interfaces';
import { getFromCallable } from '../../../utils';

export const getPropertyFromCallable = <T, Dto>(property: TableProperty<T, Dto>, _: any, row: Dto): T => {
    return getFromCallable(property, _, row);
};
