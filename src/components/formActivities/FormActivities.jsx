import React from 'react'
import styles from "./formActivities.module.css";
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const formNews = ({ values, handleSubmit, handleChange, errors, setErrors }) => {

    const handleCKEditorChange = (editor, values, errors, setErrors) => {
        values.content = editor.data.get()
        typeof values.content === "undefined" || values.content === ''
            ?
            setErrors({ ...errors, content: "El contenido es requerido." })
            :
            setErrors({ ...errors, content: '' })
    }

    return (
        <div className={styles.background}>
            <form action="" onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Formulario Actividad</h1>

                    <div className={styles.itemContainer}>
                        <label 
                            className={styles.lbl}
                            htmlFor="name">
                                Name
                        </label>
                        <input 
                            className={styles.input}
                            type="text"
                            name="name"
                            id="name"
                            value={values?.name}
                            onChange={handleChange}
                        />
                        {errors?.name ? <span className={styles.error}>{errors.name}</span> : ""}
                    </div>

                    <div className={styles.ckEditorContainer}>
                        <label className={styles.lbl} htmlFor="content">Content</label>
                        <CKEditor
                            name="content"
                            onChange={(event, editor) => handleCKEditorChange(editor, values, errors, setErrors)}
                            className={styles.ckeditor}
                            editor={ClassicEditor}
                            data={values?.content}
                        />
                        {errors?.content ? <span className={styles.error}>{errors.content}</span> : ""}
                    </div>

                    <button className={styles.submit} type='submit'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default formNews