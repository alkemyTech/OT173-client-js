import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { get } from '../../services/apiService';
import { error as serviceError } from '../../services/alertService';
import styles from './testimonials.module.css'
import { Link } from 'react-router-dom';

export default function BackofficeTestimonials() {
  const [values, setValues] = useState([]);
  const testimonialData = useMemo(() => [...values], [values]);

  const loadValues = async () => {
    const { ok, data, error } = await get(`${process.env.REACT_APP_API_URI}/testimonials`);
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

  const tableDelete = hooks => {
    hooks.visibleColumns.push(columns => [
      ...columns,
      {
        id: 'Delete',
        Header: 'Eliminar',
        Cell: ({ row }) => <button className={`${styles.button} ${styles.deletebutton}`}>Eliminar</button>,
      },
    ]);
  };
  const tableEdit = hooks => {
    hooks.visibleColumns.push(columns => [
      ...columns,
      {
        id: 'Edit',
        Header: 'Editar',
        Cell: ({ row }) => <button className={`${styles.button} ${styles.editbutton}`} >Editar</button>,
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

      <div className={styles.testimonials_header}>
        <span className={styles.testimonials_title}>Lista de Tetimonios</span>
        <Link
          className={styles.testimonials_create}
          to="/backoffice/testimonials/create"
        >
          Crear
        </Link>
      </div>

      <div className={styles.tablecontent}>
        <table {...getTableProps()}>
          <thead className={styles.header}>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} >
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className={styles.header}>{column.render('Header')}</th>
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
                    <td {...cell.getCellProps()} className={styles.tabledata} >{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>

    </div>
  );
}
