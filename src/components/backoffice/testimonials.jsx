import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { get } from '../../services/apiService';
import { error as serviceError } from '../../services/alertService';
import styles from './testimonials.module.css'

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
        Cell: ({ row }) => <button className={styles.btnEdit}>Editar</button>,
      },
    ]);
  };
  const tableDelete = hooks => {
    hooks.visibleColumns.push(columns => [
      ...columns,
      {
        id: 'Delete',
        Header: 'Borrar',
        Cell: ({ row }) => <button className={styles.btnDelete}>Borrar</button>,
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
    <div className={styles.container}>
      <table {...getTableProps()} className={styles.table}>
        <thead className={styles.thead}>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className={styles.tr}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className={styles.th}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className={styles.tbody}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles.tr}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className={styles.td}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
