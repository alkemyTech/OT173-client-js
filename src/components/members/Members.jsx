import React, { useState, useEffect } from 'react';
import Styles from "./members.module.css";
import { get } from "../../services/apiService";

const Members = () => {

    let [members, setMembers] = useState({});
    const url = "/members";

    useEffect(() => {
        const fetchMembers = async (url) => {
            try {
                const response = await get(url)
                if (response.status === 200) {
                    setMembers(response.data.members)
                }
            } catch (error) {
                return {
                    error,
                    msg: "An error occurred. Try again."
                }
            }
        }

        fetchMembers(url)
    }, [])

    return (
        <div className={Styles.container}>

            <h1 className={Styles.title}>Miembros</h1>

            <table className={Styles.table}>
                <thead className={Styles.thead}>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody className={Styles.tbody}>
                    {
                        members.length > 0
                            ?
                            members.map((member, index) => (
                                <tr key={index+1}>
                                    <td>{member.name}</td>
                                </tr>
                            ))
                            :
                            <tr>
                                <td>Loading...</td>
                            </tr>
                }
                </tbody>
            </table>
        </div>
    )
}

export default Members