import React, { useEffect, useState } from 'react';
import style from './ListOfCategories.module.css';
import { get } from '../../services/apiService';

export const BackofficeCategories = () => {
    const [categories, setCategories] = useState([]);

    const loadCategories = async () => {
        const response = await get('/categories');
        const { data } = response;
        setCategories(data);
    };

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <>
            <h1 className={style.title}>Categorías</h1>
            <hr className={style.styleOne} />
            <div className={style.container}>
                <div className={style.containerList}>
                    <ol>
                        {
                            categories.map(({ name }, index) => (
                                <li key={index} className={style.li}>{name}
                                    <div className={style.buttonContent}>
                                        <button className={style.buttonEdit}>Editar</button>
                                        <button className={style.buttonDelete}>Eliminar</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}