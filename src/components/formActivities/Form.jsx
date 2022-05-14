import React from 'react'
import styles from "./formActivities.module.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { organizationHandleError } from '../../helpers/formValidations/FormValidations';

const Form = ({
    values,
    setValues,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    setErrors,
    activity,
    touched,
    param
}) => {

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
        handleCKEditorErrors(errors, setErrors, values)
    }

    const handleCKEditorErrors = (errors, setErrors, values) => {
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
                            defaultValue={activity?.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.name && organizationHandleError(errors).name()}
                    </div>

                    <div className={styles.itemContainer}>
                        <label
                            className={styles.lbl}
                            htmlFor="logo">
                            Image
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            name={(param && "image") ?? "logo"}
                            id="logo"
                            defaultValue={activity?.image}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {(!param && touched.logo && <span className={styles.error}> {organizationHandleError(errors).logo()}</span>)
                            ??
                         (touched.image && errors?.image && <span className={styles.error}>{errors.image}</span>)}
                    </div>

                    <div className={styles.ckEditorContainer}>
                        <label className={styles.lbl} htmlFor="content">Content</label>
                        <CKEditor
                            name="content"
                            onChange={(event, editor) => handleCKEditorChange(editor, values, errors, setErrors, setValues)}
                            editor={ClassicEditor}
                            data={activity?.content}
                        />
                        {touched.name && organizationHandleError(errors).content()}
                    </div>

                    <button className={styles.submit} type='submit'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Form