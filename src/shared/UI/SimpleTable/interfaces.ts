import React, { Dispatch, SetStateAction } from 'react';
import { MouseHandler } from '../../react';

export type TablePropertyCallback<T, Dto = any> = <CellType extends Dto[keyof Dto]>(
    cell: CellType,
    row: Dto,
    index: number,
) => T;
export type TableRowCallback<T, Dto = any> = (row: Dto, index: number) => T;
export type TableHeaderPropertyCallback<T> = <CellType = any>(cell: CellType) => T;
export type TableProperty<T, Dto = any> = TablePropertyCallback<T, Dto> | T;
export type TableHeaderProperty<T> = TableHeaderPropertyCallback<T> | T;
export type TableRowProperty<T, Dto = any> = TableRowCallback<T, Dto> | T;

export interface TableColumn<Dto extends Record<keyof Dto, any> = any> {
    /** dto key name*/
    dataField?: keyof Dto | string | number | symbol;
    /** Name of the column*/
    title?: React.ReactNode | string;
    /** cell style */
    style?: TableProperty<React.CSSProperties, Dto>;
    /** cell class or function returning its*/
    className?: TableProperty<string, Dto>;
    /** header class*/
    headerClassName?: TableHeaderProperty<string>;
    /** header style*/
    headerStyle?: TableHeaderProperty<React.CSSProperties>;
    /** function returning ReactNode*/
    formatter?: TablePropertyCallback<React.ReactNode, Dto>;
    /** function returning ReactNode*/
    headerFormatter?: TableHeaderPropertyCallback<React.ReactNode>;
    /** default: 1, flex part of column*/
    flex?: number;
    /** default: true, flag for dynamic columns rendering */
    defaultVisible?: boolean;
}

export interface TableCellData {
    data?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

export interface TableRowData {
    onClick?: MouseHandler<HTMLTableRowElement>;
    className?: string;
    style?: React.CSSProperties;
    hover?: boolean;
}

export interface ColumnsVisibleStateItem<Dto extends Record<keyof Dto, any> = any> {
    /** dto key name*/
    dataField: keyof Dto | string | number | symbol;
    /** Name of the column*/
    title: React.ReactNode | string;
    /** visibility flag */
    visible: boolean;
}

export interface TableRow<Dto extends Record<keyof Dto, any> = any> {
    /** row style */
    style?: TableRowProperty<React.CSSProperties, Dto>;
    /** row class or function returning its*/
    className?: TableRowProperty<string, Dto>;
    /** Select row when hover */
    hover?: TableRowProperty<boolean, Dto>;
    /** row click handler */
    onClick?: TableRowCallback<MouseHandler<HTMLTableRowElement>, Dto>;
}

export interface SimpleTableProps {
    /** Target data*/
    data: Record<string, any>[];
    /** Columns options*/
    columns: TableColumn[];
    /** Row options*/
    row?: TableRow;
    /** Additional class name*/
    className?: string;
    /** Label when data array is empty*/
    noDataLabel?: string;
    /** State with columns visibility */
    columnsVisibleState?: ColumnsVisibleStateItem[] | null;
    /** style props; dataContentMaxHeight is value when scroll is visible, for example: calc(100vh - 400px) */
    fixedHeader?: {
        dataContentMaxHeight: string
    }
}
