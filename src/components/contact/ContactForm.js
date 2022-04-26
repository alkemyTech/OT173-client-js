import React from 'react'
import { useForm } from '../../hooks/useForm'
import contactFormStyles from './styles.module.css'

export const ContactForm = () => {

    const [{ firstName, lastName, email, message }, handleInputChange, reset] = useForm({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !message) {
            alert("Debe completar los campos")
            return;
        }
        //replace for http.post 
        localStorage.setItem("consulta", JSON.stringify({ firstName, lastName, email, message }));

        reset();
    }

    return (
        <div className={contactFormStyles.container}>
            <div>
                <h4 className={contactFormStyles.formTitle}>Contacte con nosotros</h4>
                <form onSubmit={handleSubmit}>
                    <div className={contactFormStyles.formContainer}>
                        <input
                            className={contactFormStyles.inputFirstName}
                            placeholder='Nombre'
                            name='firstName'
                            value={firstName}
                            onChange={handleInputChange}
                            autoComplete='off'
                        />
                        <input
                            className={contactFormStyles.inputLastName}
                            placeholder='Apellido'
                            name='lastName'
                            onChange={handleInputChange}
                            value={lastName}
                            autoComplete='off'
                        />
                        <input
                            className={contactFormStyles.inputEmail}
                            placeholder='Email'
                            name='email'
                            onChange={handleInputChange}
                            value={email}
                            autoComplete='off'
                        />
                        <textarea
                            className={contactFormStyles.inputMessage}
                            placeholder='Escribe tu consulta...'
                            name='message'
                            onChange={handleInputChange}
                            value={message}
                        />
                    </div>
                    <div className={contactFormStyles.containerBtnSend}>
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
    )
}
