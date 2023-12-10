import React from 'react';

export type ThProps = React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
>;
export type TdProps = React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
>;

export type Th = React.FC<ThProps>;
export type Td = React.FC<TdProps>;
