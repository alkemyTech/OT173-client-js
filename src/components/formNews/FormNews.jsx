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

const formNews = () => {
    return (
        <form action="">
            <div className={styles.container}>
                <h1 className={styles.title}>Form News</h1>
                <div className={styles.itemContainer}>
                    <label className={styles.lbl} htmlFor="title">Title</label>
                    <input className={styles.input} type="text" name="title" id="title" />
                </div>
                <div className={styles.itemContainer}>
                    <label className={styles.lbl} htmlFor="category">Category</label>
                    <select className={styles.select} name="category" id="category">
                        <option className={styles.opt} value="">Choose an option</option>
                        {categories.map((category, index) => {
                            return (
                                <option key={index + 1} className={styles.opt} value={category.id}>{category.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.itemContainer}>
                    <label className={styles.lbl} htmlFor="image">Image</label>
                    <div className={styles.imgContainer}>
                        <input className={styles.image} type="file" name="image" id="image" />
                        <div className={styles.divChoose}>Choose a image</div>
                        <div className={styles.divCharge}>Charge</div>
                    </div>
                </div>
                <div className={styles.ckEditorContainer}>
                    <label className={styles.lbl} htmlFor="image">Content</label>
                    <CKEditor className={styles.ckeditor} editor={ClassicEditor} />
                </div>
                <button className={styles.submit} type='submit'>Submit</button>
            </div>

        </form>
    )
}

export default formNews