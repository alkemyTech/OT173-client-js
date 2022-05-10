import React, { useState, useEffect } from 'react';
import { get } from "../../services/apiService";

const ListContacts = () => {

  let [ contacts, setContacts ] = useState({});
  let url = "/contacts"

  useEffect(() => {
    const fetchContacts = async (url) => {
      const response = await get(url)

      if(response.status === 200) {
        setContacts(response.data)
      }
    }

    fetchContacts(url)
  }, [])

  console.log(contacts)
  return (
    <div>ListContacts</div>
  )
}

export default ListContacts