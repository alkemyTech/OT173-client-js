import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import Editor from '@ckeditor/ckeditor5-build-classic'
import { patch, post } from '../../services/apiService';
import testimonialsFormStyle from './testimonialsForm.module.css'

function TestimonialsForm({ nombre, imagen, concepto, id, isNew }) {
    const [values, handleInputChange] = useForm({
        name: nombre,
        image: imagen
    })
    const [concept, setConcept] = useState('')
    const { name, image } = values;

    const handleTestimonialsSubmit = (e) => {
        e.preventDefault();
        isNew
            ?
            post('/testimonials', { name, image, concept }).then(console.log)
            :
            patch(`/testimonials/${id}`, { name, image, concepto }).then(console.log)
    }

    return (
        <form onSubmit={handleTestimonialsSubmit}>
            <div >
                <input
                    className={testimonialsFormStyle.input}
                    placeholder='Nombre'
                    name='name'
                    autoComplete='off'
                    onChange={handleInputChange}
                />
                <input
                    className={testimonialsFormStyle.input}
                    placeholder='Imagen'
                    name='image'
                    autoComplete='off'
                    onChange={handleInputChange}
                />
                <div className={testimonialsFormStyle.ckeditorContent}>
                    <CKEditor
                        config={{ placeholder: 'Concepto' }}
                        data={concepto}
                        editor={Editor}
                        placeholder="Concepto"
                        onini
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setConcept(data)
                        }}
                    />
                </div>
            </div>
            <div className={testimonialsFormStyle.containerButton}>
                <button
                    type='submit'
                    className={testimonialsFormStyle.buttonSend}
                >
                    Aceptar
                </button>
                <button
                    type='submit'
                    className={testimonialsFormStyle.buttonCancel}
                >
                    Cancelar
                </button>
            </div>
        </form>
    )
}
export default React.memo(TestimonialsForm)