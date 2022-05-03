import React from 'react';
import Form from './TestimonialsForm'
import testimonialsFormStyle from './testimonialsForm.module.css'

export const TestimonialsForm = React.memo(({ nombre = '', imagen = '', concepto = '', id, isNew }) => {
    return (
        <div>
            <div className={testimonialsFormStyle.content}>
                <div className={testimonialsFormStyle.container}>
                    <div className={testimonialsFormStyle.formContainer}>
                        <h4 className={testimonialsFormStyle.formTitle}>{isNew ? 'Crear' : 'Editar'}</h4>
                        <hr className={testimonialsFormStyle.styleOne} />
                        <Form
                            nombre={nombre}
                            imagen={imagen}
                            concepto={concepto}
                            id={id}
                            isNew={isNew}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
});


