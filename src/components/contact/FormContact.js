import React from 'react'
import { useForm } from './hooks/useForm'
import formContactStyles from './styles.module.css'

export const FormContact = () => {

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
        <div className={formContactStyles.container}>
            <div>
                <h4 className={formContactStyles.formTitle}>Contacte con nosotros</h4>
                <form onSubmit={handleSubmit}>
                    <div >
                        <input
                            className={formContactStyles.inputFirstName}
                            placeholder='Nombre'
                            name='firstName'
                            value={firstName}
                            onChange={handleInputChange}
                            autoComplete='off'
                        />
                        <input
                            className={formContactStyles.inputLastName}
                            placeholder='Apellido'
                            name='lastName'
                            onChange={handleInputChange}
                            value={lastName}
                            autoComplete='off'
                        />
                        <input
                            className={formContactStyles.inputEmail}
                            placeholder='Email'
                            name='email'
                            onChange={handleInputChange}
                            value={email}
                            autoComplete='off'
                        />
                        <textarea
                            className={formContactStyles.inputMessage}
                            placeholder='Escribe tu consulta...'
                            name='message'
                            onChange={handleInputChange}
                            value={message}
                        />
                    </div>
                    <div className={formContactStyles.containerBtnSend}>
                        <button
                            type='submit'
                            className={formContactStyles.buttonSend}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
