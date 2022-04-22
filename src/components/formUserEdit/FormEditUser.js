import React, { useState } from 'react'
// import { useForm } from './hooks/useForm'
import formUserEdit from './styles.module.css'
import { useModal } from './useModal';

export const FormEditUser = () => {

    const [open, toggle] = useModal();
    // const [{ firstName, lastName, email, message }, handleInputChange, reset] = useForm({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     message: ''
    // });

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (!firstName || !lastName || !email || !message) {
        //     alert("Debe completar los campos")
        //     return;
        // }
        // //replace for http.post 
        // localStorage.setItem("consulta", JSON.stringify({ firstName, lastName, email, message }));

        // reset();
    }

    return (
        <div>
            <button className={formUserEdit.buttonSend} onClick={e => toggle()}>Edit</button>
            {
                !open &&
                <div className={formUserEdit.content}>
                    <div className={formUserEdit.container}>
                        <div>
                            <h4 className={formUserEdit.formTitle}>Editar Usuario </h4>
                            <div className={formUserEdit.btnX} onClick={e => toggle()}>✖</div>
                            <form onSubmit={handleSubmit}>
                                <div >
                                    <input
                                        className={formUserEdit.inputName}
                                        placeholder='Nombre'
                                        name='firstName'
                                        // value={firstName}
                                        // onChange={handleInputChange}
                                        autoComplete='off'
                                    />
                                    <input
                                        className={formUserEdit.input}
                                        placeholder='Apellido'
                                        name='lastName'
                                        // onChange={handleInputChange}
                                        // value={lastName}
                                        autoComplete='off'
                                    />
                                    <input
                                        className={formUserEdit.input}
                                        placeholder='Rol'
                                        name='rol'
                                        // onChange={handleInputChange}
                                        // value={lastName}
                                        autoComplete='off'
                                    />
                                </div>
                                <div className={formUserEdit.containerButton}>
                                    <button
                                        type='submit'
                                        className={formUserEdit.buttonSend}
                                    >
                                        Aceptar
                                    </button>
                                    <button
                                        type='submit'
                                        className={formUserEdit.buttonCancel}
                                        onClick={e => toggle()}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
            <footer style={{backgroundColor:"#000000", marginTop:"500px", padding:"100px"}}>Facundo Villarreal</footer>
        </div>
    )
};

