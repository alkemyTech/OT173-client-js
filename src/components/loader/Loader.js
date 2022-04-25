import React from 'react'
import loaderStyle from './style.module.css'
import { TailSpin } from 'react-loader-spinner'

export const Loader = ({height,width}) => {
    return (
        <div style={{height:height,width:width}} className={loaderStyle.container}>
            <TailSpin
                height={height}
                width={width}
                color='grey'
                ariaLabel='loading'
            />
        </div>
    )
}
