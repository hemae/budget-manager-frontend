import React, { useCallback, useMemo, useState } from 'react';
import { Card, Loader, SimpleHeader, SimpleTable } from '@shared/UI';
import { TableProps } from './interfaces';
import classNames from 'classnames';
import { useKeyDown } from '@shared/react';
import './Table.scss';

export const Table: React.FC<TableProps> = (props) => {
    const {
        tableTitle,
        infoLink,
        filters,
        data,
        columns,
        dataLoading,
        row,
        expandable = false,
        responsive = false,
    } = props;

    const [expanded, setExpanded] = useState<boolean>(false);

    const expandClick = useCallback(() => {
        setExpanded((prev) => !prev);
    }, []);

    useKeyDown({
        onDown: useCallback(() => setExpanded(false), []),
        keyName: 'Escape',
    });

    const table = useMemo(() => {
        if (responsive) {
            return (
                <div className='feature-table__scroll-wrapper'>
                    <SimpleTable
                        data={data}
                        columns={columns}
                        row={row}
                        className={classNames(
                            'feature-table__table',
                            'responsible',
                        )}
                    />
                </div>
            );
        }

        return (
            <SimpleTable
                data={data}
                columns={columns}
                row={row}
                className={classNames(
                    'feature-table__table',
                )}
            />
        );
    }, [data, columns, responsive]);

    return (
        <Card
            className={classNames('feature-table', {
                expanded: expandable && expanded,
            })}
        >
            <Loader
                loading={!!dataLoading}
                contentWrapperClassName={classNames('feature-table__content', {
                    expanded: expandable && expanded,
                })}
            >
                <div>
                    {(tableTitle || expandable || filters) && (
                        <SimpleHeader
                            headerTitle={tableTitle}
                            infoLink={infoLink}
                            className='feature-table__header'
                            onExpand={expandable ? expandClick : undefined}
                            expanded={expanded}
                        >
                            {filters}
                        </SimpleHeader>
                    )}
                    {table}
                </div>
            </Loader>
        </Card>
    );
};
