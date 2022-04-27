import React from 'react'
import styles from "./formNews.module.css";
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const categories = [
    {
        id: 1,
        name: "option 1"
    },
    {
        id: 2,
        name: "option 2"
    },
    {
        id: 3,
        name: "option 3"
    },
    {
        id: 4,
        name: "option 4"
    },
]

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
                    <h1 className={styles.title}>Form News</h1>
                    <div className={styles.itemContainer}>
                        <label className={styles.lbl} htmlFor="title">Title</label>
                        <input className={styles.input} type="text" name="title" id="title" value={values?.title} onChange={handleChange} />
                        {errors?.title ? <span className={styles.error}>{errors.title}</span> : ""}
                    </div>
                    <div className={styles.itemContainer}>
                        <label className={styles.lbl} htmlFor="category">Category</label>
                        <select className={styles.select} name="category" id="category" onChange={handleChange} defaultValue={+values?.category} >
                            <option className={styles.opt} value="">Choose an option</option>
                            {categories.map((category, index) => {
                                return (
                                    /* values && category.id === +values.category ?
                                        <option key={index + 1} className={styles.opt} value={category.id} selected>{category.name}</option>
                                        : */
                                        <option key={index + 1} className={styles.opt} value={category.id}>{category.name}</option>

                                )
                            })}
                        </select>
                        {errors?.category ? <span className={styles.error}>{errors.category}</span> : ""}
                    </div>
                    <div className={styles.itemContainer}>
                        <label className={styles.lbl} htmlFor="image">Image URL</label>
                        {/* <div className={styles.imgContainer}> */}
                        <input className={styles.input} onChange={handleChange} type="text" name="image" id="image" value={values?.image} />
                        {/* <div className={styles.divChoose} >{values?.image || "Choose a image"}</div>
                        <div className={styles.divCharge}>Charge</div> */}
                        {/* </div> */}
                        {errors?.image ? <span className={styles.error}>{errors.image}</span> : ""}
                    </div>
                    <div className={styles.ckEditorContainer}>
                        <label className={styles.lbl} htmlFor="image">Content</label>
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