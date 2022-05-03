import React from 'react'
import loaderStyle from './style.module.css'
import { TailSpin } from 'react-loader-spinner'

export const Loader = (height,width) => {
    return (
        <div className={loaderStyle.container}>
            <TailSpin
                height={height}
                width={width}
                color='grey'
                ariaLabel='loading'
            />
        </div>
    )
}
