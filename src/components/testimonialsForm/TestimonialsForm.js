import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from '@ckeditor/ckeditor5-build-classic'
import testimonialsFormStyle from './testimonialsForm.module.css'
import { Loader } from '../loader/Loader';
import { useNavigate } from 'react-router';
import { saveNewTestimonial, toUpdateTestimonial } from './submitTestimonial';

export const TestimonialsForm = React.memo(({ currentName = '', currentImagen = '', currentConcept = '', id, isNew = true }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [values, handleInputChange, reset] = useForm({
        name: currentName,
        image: currentImagen
    })
    const [concept, setConcept] = useState('')
    const { name, image } = values;

    const handleTestimonialsSubmit = (e) => {
        e.preventDefault();
        if (isNew) {
            saveNewTestimonial({ name, concept, image }, navigate, setIsLoading, resetValues)
        } else {
            toUpdateTestimonial(id, { name, concept, image }, setIsLoading, resetValues)
        }
    }

    const resetValues = () => {
        reset();
        setConcept('');
    }

    useEffect(() => {
        setConcept(currentConcept)
    }, [])

    return (
        <div>
            {isLoading
                ?
                <Loader heigth={500} width={500} />
                :
                <div>
                    <div className={testimonialsFormStyle.content}>
                        <div className={testimonialsFormStyle.container}>
                            <div className={testimonialsFormStyle.formContainer}>
                                <h4 className={testimonialsFormStyle.formTitle}>{isNew ? 'Crear' : 'Editar'} Testimonio</h4>
                                <hr className={testimonialsFormStyle.styleOne} />
                                <form onSubmit={handleTestimonialsSubmit}>
                                    <div >
                                        <input
                                            className={testimonialsFormStyle.input}
                                            placeholder='Nombre'
                                            name='name'
                                            autoComplete='off'
                                            value={name}
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            className={testimonialsFormStyle.input}
                                            placeholder='Imagen'
                                            name='image'
                                            autoComplete='off'
                                            value={image}
                                            onChange={handleInputChange}
                                        />
                                        <div className={testimonialsFormStyle.ckeditorContent}>
                                            <CKEditor
                                                config={{ placeholder: 'Concepto' }}
                                                data={currentConcept}
                                                editor={Editor}
                                                placeholder="Concepto"
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
                                            type='button'
                                            className={testimonialsFormStyle.buttonCancel}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
});


