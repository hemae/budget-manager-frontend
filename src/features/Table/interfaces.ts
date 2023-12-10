import React from 'react';
import { TableColumn, TableRow } from '@shared/UI';

export interface TableProps {
    /** Title of table*/
    tableTitle?: React.ReactNode;
    /** Info source URL*/
    infoLink?: string;
    /** Filters rendered in the table header*/
    filters?: React.ReactNode;
    /** Data for table*/
    data: any[];
    /** Table columns options*/
    columns: TableColumn[];
    /** Row options*/
    row?: TableRow;
    /** Data loading flag for render Loader when true*/
    dataLoading?: boolean;
    /** default: false*/
    expandable?: boolean;
    /** default: false, if need scroll*/
    responsive?: boolean;
}
