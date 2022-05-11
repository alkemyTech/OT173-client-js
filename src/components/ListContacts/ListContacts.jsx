import React, { useState, useEffect } from 'react';
import { get } from "../../services/apiService";
import Style from "./listContacts.module.css";

const ListContacts = () => {

  let [contacts, setContacts] = useState({});
  let url = "/contacts";

  useEffect(() => {
    const fetchContacts = async (url) => {
      const response = await get(url)

      if (response.status === 200) {
        setContacts(response.data)
      }
    }

    fetchContacts(url)
  }, [])

  return (
    <div className={Style.tableContainer}>
      <h1 className={Style.title}>Contacts</h1>

      <table className={Style.table}>
        <thead className={Style.thead}>
          <tr className={Style.trTable}>
            <th className={Style.thName}>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th className={Style.thMsg}>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.length > 0 ? contacts.map((contact, index) => (
              <tr key={index + 1} className={Style.trBody}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
              </tr>

            ))
              : <tr>
                <td>Loading...</td>
              </tr>
          }
        </tbody>
      </table >

    </div>

  )
}

export default ListContacts