import React, { useState, useEffect } from 'react'
import styles from "./formNews.module.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { get } from "../../services/apiService";

const Form = ({
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

    let [categories, setCategories] = useState({})
    const url = `${process.env.REACT_APP_API_URI}/categories`;

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await get(url)

                if (response.status === 200) {
                    setCategories(response.data)
                }
            } catch (error) {
                return { title: "An error occurred. Try again.", error }
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
        
        handleCKEditorErrors(values, errors, setErrors)
    }

    const handleCKEditorErrors = (values, errors, setErrors) => {
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

export default Form