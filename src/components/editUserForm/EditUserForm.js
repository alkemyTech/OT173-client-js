import React from 'react'
import formUserEdit from './styles.module.css'

export const EditUserForm = () => {
    return (
        <div>
            <div className={formUserEdit.content}>
                <div className={formUserEdit.container}>
                    <div className={formUserEdit.formContainer}>
                        <h4 className={formUserEdit.formTitle}>Editar Usuario </h4>
                        <hr className={formUserEdit.styleOne} />
                        <form>
                            <div >
                                <input
                                    className={formUserEdit.input}
                                    placeholder='Nombre'
                                    name='firstName'
                                    autoComplete='off'
                                />
                                <input
                                    className={formUserEdit.input}
                                    placeholder='Apellido'
                                    name='lastName'
                                    autoComplete='off'
                                />
                                <input
                                    className={formUserEdit.input}
                                    placeholder='Rol'
                                    name='rol'
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
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

