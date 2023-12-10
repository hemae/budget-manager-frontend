import React, {useMemo} from 'react'
import {SimpleTableProps} from './interfaces'
import {useSimpleTable} from './lib/useSimpleTable'
import {TableRow} from './components'
import classNames from 'classnames'
import './SimpleTable.scss'

export const SimpleTable: React.FC<SimpleTableProps> = (props) => {
    const {className, fixedHeader, noDataLabel = 'Data is Empty', ...rest} = props

    const {renderedHeader, renderedRows} = useSimpleTable(rest)

    const dataContent = useMemo(() => {

        const mainDataContent = (
            <>
                {!renderedRows.length && (
                    <tr className='ui-simple-table__no-data'>
                        <td>{noDataLabel}</td>
                    </tr>
                )}
                {renderedRows.map(({row, rowData}, index) => {
                    return (
                        <TableRow
                            key={index}
                            dataSet={row}
                            rowData={rowData}
                        />
                    )
                })}
            </>
        )

        if (fixedHeader) {
            return (
                <div
                    className='ui-simple-table__scroll-wrapper'
                    style={{maxHeight: fixedHeader.dataContentMaxHeight}}
                >
                    {mainDataContent}
                </div>
            )
        } else {
            return mainDataContent
        }
    }, [fixedHeader, renderedRows, noDataLabel])

    return (
        <table className={classNames('ui-simple-table', className)}>
            <tbody className='ui-simple-table__body'>
                <TableRow
                    dataSet={renderedHeader}
                    isHeader
                />
                {dataContent}
            </tbody>
        </table>
    )
}
