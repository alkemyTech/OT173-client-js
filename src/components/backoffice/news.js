import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { get } from '../../services/apiService';

export default function BackofficeNews() {
  const [values, setValues] = useState([]);
  const newsData = useMemo(() => [...values], [values]);

  const loadValues = async () => {
    const response = await get('/news');
    if (response) {
      const information = response.data;
      setValues(information);
    }
  };

  const newsColumns = useMemo(
    () =>
      values[0]
        ? Object.keys(values[0])
            .filter(key => key !== 'id')
            .map(key => {
              return { Header: key, accessor: key };
            })
        : [],
    [values]
  );

  const tableEdit = hooks => {
    hooks.visibleColumns.push(columns => [
      ...columns,
      {
        id: 'Edit',
        Header: 'Editar',
        Cell: ({ row }) => <button>Edit</button>,
      },
    ]);
  };
  const tableDelete = hooks => {
    hooks.visibleColumns.push(columns => [
      ...columns,
      {
        id: 'Delete',
        Header: 'Borrar',
        Cell: ({ row }) => <button>Delete</button>,
      },
    ]);
  };

  const tableInstance = useTable(
    { columns: newsColumns, data: newsData },
    tableDelete,
    tableEdit
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useEffect(() => {
    loadValues();
  }, []);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}