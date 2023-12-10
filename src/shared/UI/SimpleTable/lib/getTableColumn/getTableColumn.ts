import React from 'react';
import { TableColumnOptions } from './interfaces';
import {
    TableColumn,
    TableProperty,
    TableHeaderPropertyCallback,
    TablePropertyCallback,
    TableHeaderProperty,
} from '../../interfaces';

export function getTableColumn<Dto extends Record<keyof Dto, Dto[keyof Dto]> = any>(
    options: TableColumnOptions<Dto>,
): TableColumn<Dto> {
    const { firstColumn, lastColumn, ...rest } = options;

    const additionalStyles: React.CSSProperties = firstColumn
        ? {
              paddingLeft: '24px',
              display: 'flex',
              justifyContent: 'flex-start',
              textAlign: 'left',
          }
        : lastColumn
        ? {
              paddingRight: '24px',
              display: 'flex',
              justifyContent: 'flex-end',
              textAlign: 'right',
          }
        : {
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
          };

    const style: TableProperty<React.CSSProperties, Dto> =
        typeof options.style === 'function'
            ? (cell, row, index: number) => ({
                  ...(options.style as TablePropertyCallback<React.CSSProperties, Dto>)?.(cell, row, index),
                  ...additionalStyles,
              })
            : {
                  ...additionalStyles,
                  ...options.style,
              };

    const headerStyle: TableHeaderProperty<React.CSSProperties> =
        typeof options.headerStyle === 'function'
            ? (cell) => ({
                  ...(options.headerStyle as TableHeaderPropertyCallback<React.CSSProperties>)?.(cell),
                  ...additionalStyles,
              })
            : {
                  ...additionalStyles,
                  ...options.headerStyle,
              };

    return {
        ...rest,
        style,
        headerStyle,
    };
}
