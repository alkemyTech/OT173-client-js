import React from 'react'
import { useForm } from '../../hooks/useForm'
import Header from '../Header/Header';
import contactFormStyles from './styles.module.css'
import { post } from '../../services/apiService'
import { error }  from '../../services/alertService'
import { HeaderLinks } from '../../constants/HeaderLinks-Home';

export const ContactForm = () => {

    const [{ firstName, lastName, email, message }, handleInputChange, reset] = useForm({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !message) {
            alert("Debe completar los campos")
            return;
        }  

        try {
          await post('/contacts', { firstName, lastName, email, message })
        } catch (error) {
            error(error)
        }   

        reset();
    };

    return (
        <>
            <Header logo={"/images/assets/logo1.png"} menu={HeaderLinks} buttons={true} />
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
                                    name='firstName'
                                    value={firstName}
                                    onChange={handleInputChange}
                                    autoComplete='off'
                                />
                                <input
                                    className={contactFormStyles.input}
                                    placeholder='Apellido'
                                    name='lastName'
                                    onChange={handleInputChange}
                                    value={lastName}
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
        </>
    )
}
