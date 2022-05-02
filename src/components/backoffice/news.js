import React from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable } from "react-table";


export default function News() {
    
    const [values, setValues] = useState([])

    const loadValues = async () =>{

        const response = await axios.get('/backoffice/news').catch(err => console.log(err));
        
        if(response){
            const information = response.data;

            setValues(information)
        }
    };


const newsData = useMemo(() => [...values], [values]);

const newsColumns = useMemo(
    () =>
    values[0]
    ? Object.keys(values[0])
    .map((key) => {
      return { Header: key, accessor: key };
    })
: [],
[values]
);

const tableEdit = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Editar",
        Cell: ({ row }) => (
          <button >
            Edit
          </button>
        ),
      },
    ]);
  };

  const tableDelete = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Delete",
        Header: "Borrar",
        Cell: ({ row }) => (
          <button >
            Delete
          </button>
        ),
      },
    ]);
  };

  
      
const tableInstance = useTable({ columns: newsColumns, data: newsData },
    tableDelete, tableEdit);

const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    
useEffect(() => {   
    loadValues()
},[]);

return(
    <>

    <table {...getTableProps()}>
    <thead>
        {headerGroups.map((headerGroup) =>(
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <th 
                    {...column.getHeaderProps()}>{column.render("Header")}
                     </th>
                ))}
                </tr>
        ))}
    </thead>
    <tbody {...getTableBodyProps()} >
            {rows.map((row) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
   </table>
   </>
);
}

