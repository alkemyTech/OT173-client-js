import React, { useState, useEffect } from 'react'
import styles from "./formNews.module.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

/* const categories = [
    {
        id: 2,
        name: "Category 1"
    },
    {
        id: 3,
        name: "Category 2"
    },
    {
        id: 4,
        name: "Category 3"
    },
    {
        id: 5,
        name: "Category 4"
    },
    {
        id: 6,
        name: "Category 5"
    },
    {
        id: 7,
        name: "Category 6"
    }
] */

const Basic = ({
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    setErrors,
    setValues,
    touched,
    initValues
}) => {

    let [ categories, setCategories ] = useState({})

    useEffect(()=> {
        async function fetchCategories() {
            try {
                const response = await axios.get("http://localhost:3001/categories")
                
                if(response.status === 200) {
                    setCategories(response.data)
                }
            } catch (error) {
                console.log(error)
            }

        }
        fetchCategories()
    }, [])
    
    const handleCKEditorChange = (
        editor,
        values,
        errors,
        setErrors,
        setValues
    ) => {

        setValues({ 
            ...values,
            content: editor.data.get() 
        })
        typeof values.content === "undefined" || values.content === ''
            ?
            setErrors({ ...errors, content: "El contenido es requerido." })
            :
            setErrors({ ...errors, content: '' })
    }

    return (
        <div className={styles.background}>
            <form
                action=""
                onSubmit={handleSubmit}
            >
                <div className={styles.container}>
                    <h1 className={styles.title}>Form News</h1>

                    <div className={styles.itemContainer}>
                        <label
                            className={styles.lbl}
                            htmlFor="name">
                            name
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={initValues?.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.name && errors?.name && <span className={styles.error}>{errors.name}</span>}
                    </div>

                    <div className={styles.itemContainer}>
                        <label
                            className={styles.lbl}
                            htmlFor="category">
                            Category
                        </label>

                        <select
                            className={styles.select}
                            name="category"
                            id="category"
                            onChange={handleChange}
                            onBlur={handleBlur}>

                            <option
                                className={styles.opt}
                                value="">
                                Choose an option
                            </option>
                            {categories.length > 0 ? categories.map((category, index) => {
                                return (
                                    <option
                                        key={index + 1}
                                        className={styles.opt}
                                        value={category.name}
                                    >
                                        {category.name}
                                    </option>
                                )
                            })
                            : <option>Loading...</option>}
                        </select>
                        {touched.category && errors?.category && <span className={styles.error}>{errors.category}</span>}
                    </div>

                    <div className={styles.itemContainer}>
                        <label
                            className={styles.lbl}
                            htmlFor="image">
                            Image URL
                        </label>
                        <input
                            className={styles.input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            name="image"
                            id="image"
                            defaultValue={initValues?.image}
                        />
                        {touched.image && errors?.image && <span className={styles.error}>{errors.image}</span>}
                    </div>

                    <div className={styles.ckEditorContainer}>
                        <label
                            className={styles.lbl}
                            htmlFor="image">
                            Content
                        </label>

                        <CKEditor
                            name="content"
                            onChange={(event, editor) => handleCKEditorChange(
                                editor,
                                values,
                                errors,
                                setErrors,
                                setValues)
                            }
                            className={styles.ckeditor}
                            editor={ClassicEditor}
                            data={initValues?.content}
                        />
                        {errors?.content && <span className={styles.error}>{errors.content}</span>}
                    </div>

                    <button className={styles.submit} type='submit'>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Basic