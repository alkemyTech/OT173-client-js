import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { get } from '../../services/apiService';
import { error as serviceError } from '../../services/alertService';

export default function BackofficeTestimonials() {
  const [values, setValues] = useState([]);
  const testimonialData = useMemo(() => [...values], [values]);

  const loadValues = async () => {
    const {ok,data,error} = await get(`${process.env.REACT_APP_API_URI}/testimonials`);
    if (ok) {
      setValues(data);
    } else {
      serviceError(error.message)
    }
  };

  const testimonialColumns = useMemo(
    () =>
      values[0]
        ? Object.keys(values[0])
            .filter(key => key === 'name')
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
        Cell: ({ row }) => <button>Editar</button>,
      },
    ]);
  };
  const tableDelete = hooks => {
    hooks.visibleColumns.push(columns => [
      ...columns,
      {
        id: 'Delete',
        Header: 'Borrar',
        Cell: ({ row }) => <button>Borrar</button>,
      },
    ]);
  };

  const tableInstance = useTable(
    { columns: testimonialColumns, data: testimonialData },
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
