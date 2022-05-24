import React, { useEffect, useState } from 'react';
import style from './ListOfCategories.module.css';
import { get } from '../../services/apiService';
import { showDeleteCategory } from '../../services/categoryService';
import { Loader } from '../loader/Loader';

export const BackofficeCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadCategories = async () => {
        const response = await get('/categories');
        const { data } = response;
        setCategories(data);
    };

    useEffect(() => {
        loadCategories();
    }, [isLoading]);

    return (
        <>
            <h1 className={style.title}>Categorías</h1>
            <hr className={style.styleOne} />
            {
                isLoading
                ?
                <Loader width={300} height={300} />
                :
                <div className={style.container}>
                    <div className={style.containerList}>
                        <ol>
                            {
                                categories.map(({ name, id }, index) => (
                                    <li key={index} className={style.li}>{name}
                                        <div className={style.buttonContent}>
                                            <button className={style.buttonEdit}>Editar</button>
                                            <button className={style.buttonDelete} onClick={() => showDeleteCategory(id, setIsLoading)} >Eliminar</button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            }
        </>
    )
}