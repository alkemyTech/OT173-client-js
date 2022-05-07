import React, { useEffect, useState } from 'react';
import { get } from './../../services/apiService';
import style from "./listUser.module.css"

const ListUsers = () => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    const listUser = async () => {
      const { data } = await get('users');

      setListUsers(data);
    };
    listUser();
  }, []);

  return (
    <table className={style.table}>
      <tbody>
        <tr className={style.tr}>
          <th className={style.th}>Nombre</th>
          <th className={style.th}>Apellido</th>
          <th className={style.th}>Email</th>
        </tr>
      </tbody>

      {listUsers.map(user => (
        <tbody key={user.id} className={style.tbody}>
          <tr className={style.tr}>
            <td className={style.td}>{user.firstName}</td>
            <td className={style.td}>{user.lastName}</td>
            <td className={style.td}>{user.email}</td>
            <td className={style.td}>
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default ListUsers;
