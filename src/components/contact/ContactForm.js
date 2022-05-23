import React from 'react'
import { useForm } from '../../hooks/useForm'
import contactFormStyles from './styles.module.css'
import { post } from '../../services/apiService'
import { error, info }  from '../../services/alertService'
import Members from "../members/Members";

export const ContactForm = () => {

    const [{ name, phone, email, message }, handleInputChange, reset] = useForm({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !phone || !email || !message) {
            info("Debe completar los campos")
            return;
        }

        try {
            await post('/contacts', { name, phone, email, message })
            info('Contacto agregado con exito')
            reset();
        } catch (error) {
            error(error)
        }
    };

    return (
        <>
            <div className={contactFormStyles.content}>
                <div className={contactFormStyles.container}>
                    <div className={contactFormStyles.formContainer}>
                        <h4 className={contactFormStyles.formTitle}>Contacte con nosotros</h4>
                        <hr className={contactFormStyles.styleOne} />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    className={contactFormStyles.input}
                                    placeholder='Nombre'
                                    name='name'
                                    value={name}
                                    onChange={handleInputChange}
                                    autoComplete='off'
                                />
                                <input
                                    className={contactFormStyles.input}
                                    placeholder='Telefono'
                                    name='phone'
                                    onChange={handleInputChange}
                                    value={phone}
                                    autoComplete='off'
                                />
                                <input
                                    className={contactFormStyles.input}
                                    placeholder='Email'
                                    name='email'
                                    onChange={handleInputChange}
                                    value={email}
                                    autoComplete='off'
                                />
                                <textarea
                                    className={contactFormStyles.inputTextarea}
                                    placeholder='Escribe tu consulta...'
                                    name='message'
                                    onChange={handleInputChange}
                                    value={message}
                                />
                            </div>
                            <div className={contactFormStyles.containerButton}>
                                <button
                                    type='submit'
                                    className={contactFormStyles.buttonSend}
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Members />
        </>
    )
}
