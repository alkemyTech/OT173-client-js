import React from 'react'
import loaderStyle from './style.module.css'
import { TailSpin } from 'react-loader-spinner'
export const Loader = () => {
    return (
        <div className={loaderStyle.container}>
            <TailSpin
                height={100}
                width={100}
                color='grey'
                ariaLabel='loading'
            />
        </div>
    )
}
