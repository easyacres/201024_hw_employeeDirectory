import React, { useMemo } from 'react';
import { useTable, useSortby } from 'react-table';
//                 ^^ Table Utility
import API from "../utils/API"
import  eListJson  from './eListJson.json';
//      exports by itself.
import { Columns }  from "./Columns";
// component pascal case.
// getEmployee a method on the API


export const EmployeeTable = () => {
    const columns = useMemo(() => Columns,[])
    //  returns the imported columns.     ^^^
    const data = useMemo(() => eListJson, [])
    //  useMemo insures that the data isnt recreate on every render

     const tableInstance = useTable ({
        columns: Columns,
        data: eListJson
    }, useSortby)

    // destructor the tableInstance
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance
    // we need to use these for the HTML to render as intended

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        // ^Gives Us access to the individual header group.^
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortbyToggleProps)}>
                                    {column.render('Header')} 
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? '🔽'
                                                : ' 🔼')}
                                    </span>
                                    </th>
                            ))
                        }
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {/* rows go inside the tbody tag */}
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {/* ^We then destructor ^ */}
                                    {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    // ^This is the body section of the table.^
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}