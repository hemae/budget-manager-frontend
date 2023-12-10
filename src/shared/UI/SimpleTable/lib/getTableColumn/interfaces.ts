import { TableColumn } from '../../interfaces';

export interface TableColumnOptions<Dto> extends TableColumn<Dto> {
    firstColumn?: boolean;
    lastColumn?: boolean;
}
